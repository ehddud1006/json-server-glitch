const jsonServer = require("json-server");
const server = jsonServer.create();
const data = require("./db.js")();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

var http = require("http");
var sockjs = require("sockjs");

server.use(middlewares);

server.get("/boards", async (req, res) => {
  res.status(200).json(data.boards);
});

server.get("/boards/:id", async (req, res) => {
  res.status(200).json(data.specificBoardArticles);
});

server.get("/users/self", async (req, res) => {
  res.status(200).json(data.userSelf);
});

server.get("/articles/:id", async (req, res) => {
  res.status(200).json(data.articleDetail);
});

server.get("/articles", async (req, res) => {
  res.status(200).json(data.articles);
});

server.get("/api/v1/webrtc/chat/channels/partiDESC/0", async (req, res) => {
  res.status(200).json(data.channels);
});

server.get("/api/v1/webrtc/chat/mychannel/partiDESC/0", async (req, res) => {
  res.status(200).json(data.channels);
});

server.get("/api/v1/webrtc/chat/channel/:id/100", async (req, res) => {
  res.status(200).json(data.chattingLog);
});

server.get("/api/v1/webrtc/chat/channel/:id/80", async (req, res) => {
  res.status(200).json(data.chattingLog20);
});

server.get("/api/v1/webrtc/chat/channel/:id/60", async (req, res) => {
  res.status(200).json(data.chattingLog20);
});

server.get("/api/v1/webrtc/chat/channel/:id/40", async (req, res) => {
  res.status(200).json(data.chattingLog20);
});

server.get("/api/v1/webrtc/chat/channel/:id/20", async (req, res) => {
  res.status(200).json(data.chattingLog20);
});

server.get("/api/v1/webrtc/chat/channel/:id/0", async (req, res) => {
  res.status(200).json(data.chattingLog20);
});

var echo = sockjs.createServer({
  sockjs_url: "http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js",
});
echo.on("connection", function (conn) {
  conn.on("data", function (message) {
    conn.write(message);
  });
  conn.on("close", function () {});
});

var chatServer = http.createServer();
echo.installHandlers(chatServer, { prefix: "/echo" });
chatServer.listen(9999, "0.0.0.0");

// const { Client } = require("@stomp/stompjs");

// const WebSocket = require("ws");
// Object.assign(global, { WebSocket });

// const client = new Client({
//   brokerURL: "ws://localhost:9999/echo",
//   onConnect: () => {
//     client.subscribe("/topic/test01", (message) =>
//       console.log(`Received: ${message.body}`)
//     );
//     client.publish({ destination: "/topic/test01", body: "First Message" });
//   },
// });

// client.activate();

server.listen(port);

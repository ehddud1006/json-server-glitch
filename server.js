const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(require("./db.js")());
const data = require("./db.js")();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);

server.get("/boards", async (req, res) => {
  console.log(data.boards);
  res.status(200).json(data.boards);
});

server.listen(port);

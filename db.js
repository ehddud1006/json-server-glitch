const boards = require("./data/boards.json");
const specificBoardArticles = require("./data/specificBoardArticles.json");
const userSelf = require("./data/userSelf.json");
const articleDetail = require("./data/articleDetail.json");
const articles = require("./data/articles.json");
const channels = require("./data/channels.json");
const chattingLog = require("./data/chattingLog.json");
const chattingLog20 = require("./data/chattingLog20.json");

module.exports = function () {
  return {
    boards,
    specificBoardArticles,
    userSelf,
    articleDetail,
    articles,
    channels,
    chattingLog,
    chattingLog20,
  };
};

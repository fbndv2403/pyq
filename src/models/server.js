const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../databases/config.db");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.paths = {
      news: "/pyqconsultores/news",
    };
    this.middlewares();
    this.connectionDB();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  async connectionDB() {
    await dbConnection();
  }

  routes() {
    this.app.use(this.paths.news, require("../routes/news.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
      console.log(`http://localhost:${this.port}/`);
    });
  }
}

module.exports = Server;

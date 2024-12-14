const { PostController } = require("../../controllers/PostController");

class PostRouter {
  constructor() {
    this.router = require("express").Router();
    this.controller = new PostController();
    this.#init();
  }

  create(req, res) {
    this.controller.create(req.body);
    res.send("Publicación creada");
  }

  #init() {
    this.router.post("/", this.create.bind(this));
  }

  run(app) {
    app.use("/posts/", this.router);
  }
}

module.exports = { PostRouter };

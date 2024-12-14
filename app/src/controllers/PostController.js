const { MinioService } = require("../services/MinioService");

class PostController {
  constructor() {
    this.storage = new MinioService();
  }

  create(post) {
    console.log(post);
  }
}

module.exports = { PostController };

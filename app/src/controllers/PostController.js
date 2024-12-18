const { MinioService } = require("../services/MinioService");

class PostController {
  constructor() {
    this.storage = new MinioService();
    this.storage.setup();
  }

  async create(post, file) {
    await this.storage.putObject("blog", `/files/${file.name}`, file.data);
  }
}

module.exports = { PostController };

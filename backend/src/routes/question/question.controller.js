const Repository = require('../../services/repository');

class PostController {
  constructor() {
    this.repositoryService = new Repository();
  }

  async find(id) {
    return this.repositoryService.findQuestion(id);
  }

  async create(question, author) {
    return this.repositoryService.createQuestion(question, author);
  }
}

module.exports = PostController;
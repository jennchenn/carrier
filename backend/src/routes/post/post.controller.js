const Repository = require('../../services/repository');

class PostController {
  constructor() {
    this.repositoryService = new Repository();
  }

  async find(id) {
    return this.repositoryService.findPost(id);
  }

  async findByGroup(id) {
    return this.repositoryService.findPostsByGroup(id);
  }

  async create(groupId, name) {
    return this.repositoryService.createPost(groupId, name);
  }

  async addQuestions(postId, questionIds) {
    return this.repositoryService.addQuestionsToPost(postId, questionIds);
  }

  async findReplies(postId, questionId) {
    return this.repositoryService.findReplies(postId, questionId);
  }

  async createReply(user, postId, questionId, response) {
    return this.repositoryService.createReply(user, postId, questionId, response);
  }
}

module.exports = PostController;
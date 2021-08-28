const Repository = require('../../services/repository');

class GroupController {
  constructor() {
    this.repositoryService = new Repository();
  }

  async create(name, description, user) {
    return this.repositoryService.createGroup(name, description, user);
  }

  async find(id) {
    return this.repositoryService.findGroup(id);
  }

  async invite(groupId, userId) {
    return this.repositoryService.addUserToGroup(userId, groupId);
  }
}

module.exports = GroupController;
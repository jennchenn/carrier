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
}

module.exports = GroupController;
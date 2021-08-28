const User = require('../models/User');
const Group = require('../models/Group');

class Repository {
  createUser(email, passwordHash, firstName, lastName, displayName) {
    const user = {
      email,
      password: passwordHash,
      firstName,
      lastName,
      displayName
    };
    return User.create(user);
  }

  updateUser(user) {
    return User.findOneAndUpdate(
      { email: user.email },
      { refreshToken: user.refreshToken },
      { new: true }
    );
  }

  findUser(email) {
    return User.findOne({
      email,
    }).populate('groups');
  }

  async addUserToGroup(id, groupId) {
    const group = await Group.findOneAndUpdate(
      { _id: groupId },
      { $addToSet: { members: id } },
      { new: true }
    );
    return group;
  }

  async createGroup(name, description, user) {
    const group = {
      name,
      description,
      members: [user._id],
    };
    const createdGroup = await Group.create(group);
    return createdGroup;
  }

  findGroup(id) {
    return Group.findById(id).populate('members');
  }




  findUserById(id) {
    return User.findById(id);
  }

  async addGroupToUser(email, groupId) {
    return User.findOneAndUpdate(
      { email: email },
      { $addToSet: { groups: groupId } }
    );
  }
}

module.exports = Repository;

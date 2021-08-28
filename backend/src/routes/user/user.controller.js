const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Repository = require('../../services/repository');

class UserController {
  constructor() {
    this.repositoryService = new Repository();
  }

  async register(email, password, firstName, lastName, displayName) {
    const saltRounds = parseInt(process.env.NUM_SALT_ROUNDS);
    const passwordHash = bcrypt.hashSync(password, saltRounds);
    return this.repositoryService.createUser(email, passwordHash, firstName, lastName, displayName);
  }

  async findUser(email) {
    return this.repositoryService.findUser(email);
  }

  async invite(email, groupId) {
    return this.repositoryService.addUserToGroup(email, groupId);
  }

  // Compare password with the hash saved to the database
  async matchPassword(user, password) {
    const passwordHash = user.password;
    return bcrypt.compareSync(password, passwordHash);
  }

  async generateToken(user) {
    const token = jwt.sign({
      email: user.email,
      _id: user._id
    }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });

    return {
      token,
      email: user.email
    };
  }
}

module.exports = UserController;
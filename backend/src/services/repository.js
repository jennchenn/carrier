const User = require('../models/User');
const Group = require('../models/Group');
const Post = require('../models/Post');
const Question = require('../models/Question');
const Reply = require('../models/Reply');

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
    await this.addGroupToUser(id, groupId);
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

  async findGroup(id) {
    return Group.findById(id).populate('members');
  }

  async addGroupToUser(id, groupId) {
    return User.findOneAndUpdate(
      { _id: id },
      { $addToSet: { groups: groupId } }
    );
  }

  async findQuestion(id) {
    return Question.findById(id);
  }

  async createQuestion(question, author) {
    const createdQuestion = await Question.create({ question, author });
    return createdQuestion;
  }

  async findPost(id) {
    return Post.findById(id).populate('questions');
  }

  async findPostsByGroup(id) {
    return Post.find({ group: id }).populate('questions');
  }

  async createPost(groupId, name) {
    const post = {
      group: groupId,
      name: name
    };
    const createdPost = await Post.create(post);
    return createdPost;
  }

  async addQuestionsToPost(postId, questionIds) {
    return Post.findOneAndUpdate(
      { _id: postId },
      { $addToSet: { questions: { $each: questionIds } } }
    );
  }

  async findReplies(postId, questionId) {
    return Reply.find({ post: postId, question: questionId });
  }

  async createReply(user, postId, questionId, response) {
    const existingReply = await Reply.findOne({ user: user._id, post: postId, question: questionId });
    if (existingReply) {
      console.log("Updating existing response");
      return Reply.findOneAndUpdate(
        { _id: existingReply._id },
        { response: response }
      );
    } else {
      return Reply.create({ user: user._id, post: postId, question: questionId, response });
    }
  }
}

module.exports = Repository;

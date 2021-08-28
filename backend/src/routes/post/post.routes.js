const PostController = require('./post.controller');

const postController = new PostController();

exports.find = async (req, res) => {
  try {
    const result = await postController.find(req.params.postId);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
};

exports.findByGroup = async (req, res) => {
  try {
    const posts = await postController.findByGroup(req.params.groupId);
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
};

exports.create = async (req, res) => {
  try {
    const post = await postController.create(req.body.groupId, req.body.name);
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
};

exports.addQuestions = async (req, res) => {
  try {
    const post = await postController.addQuestions(req.body.postId, req.body.questionIds);
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
};

exports.findReplies = async (req, res) => {
  try {
    const replies = await postController.findReplies(req.params.postId, req.params.questionId);
    res.status(200).send(replies);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
};

exports.createReply = async (req, res) => {
  try {
    const reply = await postController.createReply(req.user, req.body.postId, req.body.questionId, req.body.response);
    res.status(200).send(reply);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
};
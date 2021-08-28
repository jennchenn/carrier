const QuestionController = require('./question.controller');

const questionController = new QuestionController();

exports.find = async (req, res) => {
  try {
    const result = await questionController.find(req.params.id);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
};

exports.create = async (req, res) => {
  try {
    const author = 'author' in req.body ? req.body.author : "anonymous";
    const result = await questionController.create(req.body.question, author);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
};
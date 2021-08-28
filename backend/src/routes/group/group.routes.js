const GroupController = require('./group.controller');

const groupController = new GroupController();

exports.create = async (req, res) => {
  try {
    const user = req.user;
    const result = await groupController.create(req.body.name, req.body.description, user);
    res.status(200)
      .send({
        message: 'Group created!',
        name: result.name,
        id: result._id
      });
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
};

exports.find = async (req, res) => {
  try {
    const group = await groupController.find(req.params.id);
    res.status(200).send(group);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
};

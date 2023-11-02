const category = require('./model');

const index = (req, res) => {
  category
    .find()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};
const detail = (req, res) => {
  const { id } = req.params;
  category
    .findOne({ _id: req.params.id })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};
const store = (req, res) => {
  const { name } = req.body;
  category
    .create({ name })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const update = (req, res) => {
  const { name } = req.body;

  category
    .updateOne({ name })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};
const destroy = (req, res) => {
  category
    .deleteOne({ _id: req.params.id })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

module.exports = {
  index,
  detail,
  store,
  update,
  destroy,
};

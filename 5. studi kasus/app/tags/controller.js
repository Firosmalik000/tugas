const tag = require('./model');

const index = (req, res) => {
  tag
    .find()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};
const detail = (req, res) => {
  const { id } = req.params;
  tag
    .findOne({ _id: req.params.id })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};
const store = (req, res) => {
  const { name } = req.body;
  tag
    .create({ name })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const update = (req, res) => {
  const { name } = req.body;

  tag
    .updateOne({ name })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};
const destroy = (req, res) => {
  tag
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

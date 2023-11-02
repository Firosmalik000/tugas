const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./model/todo');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://eduwork:book@127.0.0.1:27017/to_do_list?authSource=admin');

app.post('/add', (req, res) => {
  const { task } = req.body;
  TodoModel.create({ task })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
app.get('/get', (req, res) => {
  TodoModel.find()
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.listen(5000, () => {
  console.log('server is running on port:5000');
});

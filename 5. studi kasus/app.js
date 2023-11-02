require('./config/mongoose');
const express = require('express');
const app = express();
const path = require('path');
('body-parser');

const productRouter = require('./app/product/routes.js');
const categoryRouter = require('./app/category/routes');
const tagRouter = require('./app/tags/routes');
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));

app.use('/api', productRouter);
app.use('/api', categoryRouter);
app.use('/api', tagRouter);

app.use((req, res) => {
  res.status(404);
  res.send({
    status: 'failed',
    message: `${req.originalUrl} not found`,
  });
});
// untuk buka local host

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});

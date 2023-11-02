const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://eduwork:book@127.0.0.1:27017/simple_login?authSource=admin');

app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);
dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/auth', require('./routes/userRouter'));
app.use('/customer', require('./routes/customerrouter'));

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});

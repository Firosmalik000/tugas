const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes/authRoute');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());

try {
  mongoose.connect('mongodb://eduwork:book@127.0.0.1:27017/login_flow?authSource=admin');
  console.log('connected to mongodb');
} catch (error) {
  console.log(error);
}

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});

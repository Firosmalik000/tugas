const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/model');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const dbUser = await User.findOne({ email }).exec();
  if (dbUser) {
    const match = await bcrypt.compare(password, dbUser.password);
    if (match) {
      const token = jwt.sign({ _id: dbUser._id, name: dbUser.name, email }, process.env.JWT_LOGIN_TOKEN, {
        expiresIn: '1d',
      });
      res.json({ message: 'Login Success', token });
    } else {
      res.status(400).json({ message: 'username and password incorect' });
      return false;
    }
  } else {
    res.status(400).json({ message: 'Email not Registered, please sign up ' });
  }
};

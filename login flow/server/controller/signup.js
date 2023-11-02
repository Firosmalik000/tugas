const bcrypt = require('bcrypt');
const { isEmail } = require('validator');
const User = require('../models/model');

const saltRounds = 10;

const validateSignUpData = async (req, res) => {
  const { name, email, password } = req.body;
  if (name.trim().length === 0) {
    res.status(400).json({ message: 'Name must not be empty' });
    return false;
  }
  if (!isEmail(email)) {
    res.status(400).json({ message: 'Email must be valid' });
    return false;
  }
  if (password.trim().length === 0) {
    res.status(400).json({ message: 'please enter the apssword' });
    return false;
  } else if (password.trim().length <= 5) {
    res.status(400).json({ message: 'Password must be at least 6 characters' });
    return false;
  }
  const existingUser = await User.findOne({ email }).exec();
  if (existingUser) {
    res.status(400).json({ message: 'Email already register' });
    return false;
  }
  return true;
};

module.exports = async (req, res) => {
  const { name, email, password } = req.body;
  const isValid = validateSignUpData(req, res);

  if (isValid) {
    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const user = await User.create({ name, email, password: hashedPassword });

      res.json({
        message: 'User created Succesfully',
        user: {
          name: user.name,
          email: user.email,
          _id: user.id,
        },
      });
    } catch (error) {
      res.status(400).json({ message: error });
      console.log(error);
    }
  }
};

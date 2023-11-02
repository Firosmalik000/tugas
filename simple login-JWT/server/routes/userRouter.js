const router = require('express').Router();
const User = require('../models/usermodel');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send({ message: 'Please provide email and password' });
    }
    if (password.length < 5) {
      res.status(400).json({ message: 'Password must be at least 6 characters' });
    }
    const existUser = await User.findOne({ email });
    console.log(existUser);
    if (existUser) {
      res.status(400).json({ message: 'Email already exists' });
    }
    // hash password to token
    const salt = await bycrypt.genSalt();
    const passwordhash = await bycrypt.hash(password, salt);
    // save new user account to database
    const newUser = new User({
      email,
      password: passwordhash,
    });
    const saveNewUser = await newUser.save();
    // log the user in to change password hash to tokeen
    const token = jwt.sign({ User: saveNewUser._id }, process.env.JWT_SECRET);

    // send token to only http cookie
    res
      .cookie('token', token, {
        httpOnly: true,
      })
      .send();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
// login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(400).json({ message: 'User not found' });
    }
    // check password from database register
    const isMatch = await bycrypt.compare(password, existUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ User: existUser._id }, process.env.JWT_SECRET);
    res
      .cookie('token', token, {
        httpOnly: true,
      })
      .send();
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

// logout untuk hilangin cookie
router.get('/logout', (req, res) => {
  res
    .cookie('token', '', {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

router.get('/loggedIn', (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json(false);
    }
    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    console.log(err);
    res.status(401).json(false);
  }
});

module.exports = router;

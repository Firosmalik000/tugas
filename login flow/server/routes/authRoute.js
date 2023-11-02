const { Router } = require('express');
const signup = require('../controller/signup');
const login = require('../controller/login');
const auth = require('../controller/auth');

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/auth', auth);

module.exports = router;

const express = require('express');
const router = express.Router();

const login = require('./controllers/LoginController.js');

router.get('/login', login.login);
router.post('/register', login.register);

module.exports = router;
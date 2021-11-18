const express = require('express');
const login = express();

login.get('/', (req, res) => {
    res.json('login module.')
})

module.exports = login;
const express = require('express');
const signup = express();

signup.get('/', (req, res) => {
    res.json('signup module.')
})

module.exports = signup;
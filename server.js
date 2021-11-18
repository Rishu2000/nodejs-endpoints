const express = require('express');
const app = express();
const port = 3004;
const login = require('./route/Login');
const signup = require('./route/Signup');

app.use('/login',login);
app.use('/signup',signup);
app.get('/', (req, res) => {
    res.json("You are in root folder.")
})

app.listen(port,() => {
    console.log("server started on port " + port);
})
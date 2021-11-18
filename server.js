const express = require('express');
const app = express();
const port = 3004;
const login = require('./route/Login');

app.use('/login',login);
app.get('/', (req, res) => {
    res.json("You are in root folder.")
})

app.listen(port,() => {
    console.log("server started on port " + port);
})
const express = require('express');
const buy = express();

buy.get('/', (req, res) => {
    res.json("All orders.");
})

module.exports = buy;
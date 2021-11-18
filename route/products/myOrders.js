const express = require('express');
const myOrders = express();
const buy = require('./Buy');

myOrders.use('/buy',buy);
myOrders.get('/', (req, res) => {
    res.json("All orders.");
})

module.exports = myOrders;
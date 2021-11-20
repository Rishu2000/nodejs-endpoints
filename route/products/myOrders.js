const express = require('express');
const myOrders = express();
const cart = require('../../constants/Cart');
const buy = require('./Buy');

myOrders.use('/buy',buy);
myOrders.get('/', (req, res) => {
    res.json(cart);
})

module.exports = myOrders;
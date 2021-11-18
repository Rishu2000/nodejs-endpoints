const express = require('express');
const myOrders = express();

myOrders.get('/', (req, res) => {
    res.json("All orders.");
})

module.exports = myOrders;
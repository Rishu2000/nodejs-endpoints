const express = require('express');
const viewOrders = express();

viewOrders.get('/', (req, res) => {
    res.json("All orders.");
})

module.exports = viewOrders;
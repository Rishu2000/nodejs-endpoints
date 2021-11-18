const express = require('express');
const viewOrders = express();
const {knex} = require('../../pg/connection');

viewOrders.get('/', (req, res) => {
    knex('products')
        .then((rows) => {
            res.json(rows);
        })
})

viewOrders.post('/', (req, res) => {
    if(req.session.Authentication.role === 'admin') {
        const {name,id,price,description} = req.body;
        knex('products')
            .insert({name:name, id:id, price:price, description:description})
            .then(() => {
                res.status(201).json({
                    Success: true,
                    Message:`${name} has been Added.`
                });
            })
    }else{
        res.status(403).json({
        Success: false,
        Message:`You are not admin.`
    });
    }
})

module.exports = viewOrders;
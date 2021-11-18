const express = require('express');
const login = express();
const {knex} = require('../pg/connection')

login.use((req,res,next) => {
    const {Authentication} = req.session;
    if(Authentication || (req.path === '/' && req.method === 'POST')){
        next();
    }else{
        res.status(403).json({
            Success: false,
            Message: 'Authentication required.'
        })
    }
})

login.get('/', (req, res) => {
    res.json(req.session.Authentication);
})

login.post('/', async (req, res) => {
    const {username,password} = req.body;
    if(!username || !password){
        req.session.destroy();
        res.status(400).json({
            Success:false,
            Message:"Please enter both email and password"
        });
    }else{
        await knex('users')
        .where({username: username})
        .then((rows) => {
            if(rows.length > 0){
                if(rows[0].password === password){
                    req.session.Authentication = rows[0];
                    res.json({
                        Success:true,
                        Message:rows[0].name
                    });
                }else{
                    req.session.destroy();
                    res.status(401).json({
                        Success:false,
                        Message:"Incorrect password."
                    });
                }
            }else{
                req.session.destroy();
                res.status(404).json({
                    Success:false,
                    Message:"Please, signup if you are a new user."
                });
            }
        })
    }
})

module.exports = login;
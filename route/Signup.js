const express = require('express');
const signup = express();
const {knex} = require('../pg/connection');

signup.use((req,res,next) => {
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

signup.get('/', (req, res) => {
    res.json('signup module.')
})

signup.post('/', (req, res) => {
    const {username,password,role} = req.body;
    if(!password || !username){
        req.session.destroy();
        res.status(400).json({
            Success:false,
            Message:"Username and Password are required."
        });
    }else{
        knex('users')
        .where({username: username})
        .then((rows) => {
            if(rows.length > 0){
                req.session.destroy();
                res.status(406).json({
                    Success: false,
                    Message:"username already exist."
                })
            }else{
                knex('users')
                .insert({username:username, password:password, role:role})
                .then(() => {
                    // req.session.Authentication = req.body;
                    res.status(201).json({
                        Success: true,
                        Message:`${username} has been created. Please, login to get started.`
                    });
                    console.log(req.session);
                })
            }
        })
    }
})

module.exports = signup;
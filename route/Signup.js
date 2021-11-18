const express = require('express');
const signup = express();

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
    res.json('eererge');
})

module.exports = signup;
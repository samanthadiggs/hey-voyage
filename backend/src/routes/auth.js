const express = require('express');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const router = express.Router();
const userModel = require('../models/userModel');
const db = require('../../db/db');



// route for user login

router.post('/login', async (req, res) => {

    const {identifier, password} = req.body;
    const user = userModel.findUserByEmail(identifier);
    
    if(!user){
        return  res.status(400).json({message: 'Invalid email or password'});
    }

    const match = await bcrypt.compare(password, user.password);
    
    if(!match){
        return res.status(400).json({message: 'Invalid email or password'});
    }

    // generate random session token
    const token = crypto.randomBytes(16).toString('hex');
    
    // store session token in database
    const stmt = db.prepare(`UPDATE users SET session_token = ? WHERE id = ?`);
    stmt.run(token, user.id);
    return res.json({ token, message: 'Login successful' });
});

module.exports = router;
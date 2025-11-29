const db = require('../../db/db');

// function to create a new user
module.exports = {
    createUser({username, email, password}) {
        const stmt = db.prepare(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`);
        const info = stmt.run(username, email, password);
        return info.lastInsertRowid;
    },

    // function to find user by email
    findUserByEmail(identifier){
        const stmt = db.prepare(`SELECT * FROM users WHERE email = ?`);
        const user = stmt.get(identifier);
        return user;
    }

}


console.log('userModel loaded');
const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join(__dirname, 'database.db'));

db.exec(`
    CREATE TABLE IF NOT EXISTS 
    users(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    username TEXT UNIQUE, 
    email TEXT UNIQUE, 
    password TEXT,
    session_token TXT);
    `);


    console.log('database and users table created successfuly');



    module.exports = db;
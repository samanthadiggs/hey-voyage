const db = require('./db');
const bcrypt = require('bcryptjs');

// delete all existing users (optional)
db.prepare('DELETE FROM users').run();

// inserting sample user into table
const insert = db.prepare(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`);

const hashedPassword = bcrypt.hashSync('1234', 10);
insert.run('sample','sample@test.com', hashedPassword);

console.log('sample user inserted');
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(cors());  
app.use(express.json());

/*
app.use((req, res, next) => {
    console.log("➡️ Incoming:", req.method, req.url);
    next();
});
*/

// routes
app.use('/auth', authRoutes);   


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
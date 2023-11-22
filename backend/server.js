require('dotenv').config();

const express = require('express');
const userRoutes = require('./routes/users');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes 
app.use('/api/user', userRoutes);



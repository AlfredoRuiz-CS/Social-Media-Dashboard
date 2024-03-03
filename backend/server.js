require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');

// express app
const app = express();

// middleware
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


// routes 
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
});

const PORT = process.env.PORT || 4000;
// connection to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () =>{
            console.log("listening on port ", PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })


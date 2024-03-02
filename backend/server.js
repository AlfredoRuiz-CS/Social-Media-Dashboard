require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use(cors(
    {
        origin: ["https://social-media-dashboard-client.vercel.app"],
        methods: ['GET', 'POST'],
        credentials: true
    }
));

// routes 
app.use('/api/user', userRoutes);

// connection to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>{
            console.log("listening on port ", process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })


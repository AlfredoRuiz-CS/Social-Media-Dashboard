// require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');

// express app
const app = express();

// middleware
app.use(express.json());

const corsOptions = {
    origin: 'https://social-media-dashboard-client.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204
  };
app.use(cors(corsOptions));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


// routes 
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
});


// connection to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () =>{
            console.log("listening on port ", PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })


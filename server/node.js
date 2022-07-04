const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const postsRoutes = require('../server/routes/posts');

app.get('/', (req, res) => {
    res.status(200).send('Home Page');
});

app.use('/posts', postsRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewPArser: true }, () => {
    console.log('Database connected successfully!');
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));
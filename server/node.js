const express = require('express');
const app = express();
const PORT = 3001;
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const { Post } = require("./models/post");
const dotenv = require('dotenv');
dotenv.config();

const postsRoutes = require('../server/routes/posts');
const { restart } = require('nodemon');

app.get('/', (req, res) => {
    res.status(200).send('Home Page');
});

app.get('/api', (req, res) => {
  res.json({ message: "Hello from backend!"});
})

// const test = new Post({
//     title: "newGuitar",
//     description: "acoustic",
//   });
//   test.save().then(() => console.log("One entry added"));

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(bodyparser.urlencoded({extended: false}));

app.use('/posts', postsRoutes);



//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//Atlas Conneciton
// mongoose.connect(process.env.MONGO_URI, () => {
//     console.log('Database connected successfully!');
// });

//Robo 3T connection
mongoose.connect(process.env.ROBO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
    console.log('Connected to database successfully!')
  })

app.listen(PORT, console.log(`Server running on port ${PORT}`));
const express = require('express');
const Post = require("../models/post");
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('This is the home page');
});

router.post("/", (req, res) => {
    console.log(req.body)
});

module.exports = router;
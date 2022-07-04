const express = require('express');
const { Post } = require("../models/post");
const router = express.Router();

// POST:  Create Post
router.post('/', async (req, res) => {
    console.log(req.body);
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
      position: req.body.position
    });
    try {
      const savePost = await post.save();
      res.status(201).json(savePost);
      console.log('post successful!');
    } catch (error) {
      res.status(404).json({ message: error });
    }
  });
  
  // GET: Get all Posts
  router.get('/', async (req, res) => {
    try {
      const getPosts = await Post.find();
  
      res.status(200).json(getPosts);
      console.log('All Blog post retrieved!');
    } catch (error) {
      res.status(404).json({ message: error });
    }
  });
  

module.exports = router;
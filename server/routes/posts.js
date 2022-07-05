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
      console.log(error);
    }
  });
  
  // GET: Get all Posts
  router.get('/', async (req, res) => {
    try {
      const getPosts = await Post.find();
  
      res.status(200).json(getPosts);
      console.log('All Blog post retrieved!');
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: error });
    }
  });

  //GET by ID
  router.get('/:postId', async (req, res) => {
    try {
      const getSinglePost = await Post.findById(req.params.postId);

      res.status(200).json(getSinglePost);
      console.log(`blog with idv${req.params.postId} retrieved!`)
    } catch (error) {
      console.log(error);
      res.status(404).json({message: error});
    }
  });

  //DELETE by ID
  router.delete('/postId', async (req, res) => {
    try {
      const deleteSinglePost = await Post.remove({ 
        _id:req.params.postId
      });

      res.status(200).json(deleteSinglePost);
      console.log(`post with id ${req.params.postId} deleted!`);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  });

  //UPDATE by ID
  

module.exports = router;
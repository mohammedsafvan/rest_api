const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

// the url should like this "host:port/posts/"
router.get("/", (req, res) => {
  res.send("it is /posts GET");
});


router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;

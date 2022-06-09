const express = require("express");

const {
  getPosts,
  getPost,
  deletePost,
  addPost,
  editPost,
} = require("../controller/blog-controller");

const router = express.Router();

router.get("/posts", getPosts);
router.get("/post/:id", getPost);
router.delete("/post/:id", deletePost);
router.post("/post", addPost);
router.put("/post/:id", editPost);

module.exports = router;

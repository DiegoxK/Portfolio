const Blog = require("../models/blog");

const getPosts = async (req, res) => {
  try {
    const data = await Blog.find();
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: "Couldn't find the blog posts",
    });
  }
};

const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Blog.findById(id);
    res.status(200).json(post);
  } catch (error) {
    return res.status(400).json({
      messagee: "Couldn't find the blog post",
    });
  }
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Blog.findByIdAndDelete({ id });
    if (!post) {
      return res.status(400).json({
        message: "No post finded",
      });
    }
    res.status(200).json(post);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error",
    });
  }
};

const addPost = async (req, res) => {
  const post = req.body;
  try {
    await Blog.create(post);
    res.status(200).json({ message: "Post Added" });
  } catch (error) {
    return res.status(500).json({
      message: "Error",
    });
  }
};

const editPost = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {
    const post = await Blog.findByIdAndUpdate(_id, body, { new: true });
    res.status(200).json(post);
  } catch (error) {
    return res.status(400).json({
      message: "Error",
    });
  }
};

exports.getPosts = getPosts;
exports.getPost = getPost;
exports.deletePost = deletePost;
exports.addPost = addPost;
exports.editPost = editPost;

const Content = require("../models/content");
const Blog = require("../models/blog");
const Projects = require("../models/projects");
const Profile = require("../models/profile");

const typeCheck = (type) => {
  switch (type) {
    case "blog":
      return Blog;
    case "projects":
      return Projects;
    case "contents":
      return Content;
    case "profile":
      return Profile;
  }
};

// Get All
const getAll = async (req, res) => {
  const type = req.baseUrl.split("/")[2];
  const schema = typeCheck(type);

  try {
    const data = await schema.find().sort([["date", -1]]);
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: `Couldn't find the ${type} data`,
    });
  }
};

// Get One
const getById = async (req, res) => {
  const type = req.baseUrl.split("/")[2];
  const schema = typeCheck(type);
  const id = req.params.id;

  console.log(id);

  let data;
  try {
    // If an url key is finded
    data = await schema.findOne({ url: id });
    // if (!data) {
    //   // If an id key is finded
    //   data = await schema.findById(id);
    // }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: `Couldn't find the ${type} data`,
    });
  }
};

// Delete by id
const deleteById = async (req, res) => {
  const type = req.baseUrl.split("/")[2];
  const schema = typeCheck(type);
  const id = req.params.id;

  try {
    const data = await schema.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({
        message: `Couldn't find the ${type} data`,
      });
    }
    res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error",
    });
  }
};

// Add Data
const addData = async (req, res) => {
  const type = req.baseUrl.split("/")[2];
  const schema = typeCheck(type);
  const data = req.body;

  try {
    await schema.create(data);
    res.status(200).json({ message: `${type} Added` });
  } catch (error) {
    return res.status(500).json({
      message: "Error",
    });
  }
};

// Edit data
const editData = async (req, res) => {
  const type = req.baseUrl.split("/")[2];
  const schema = typeCheck(type);
  const _id = req.params.id;
  const body = req.body;

  try {
    const data = await schema.findByIdAndUpdate(_id, body, { new: true });
    res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

exports.getAll = getAll;
exports.getById = getById;
exports.deleteById = deleteById;
exports.addData = addData;
exports.editData = editData;

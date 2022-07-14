const Blog = require("../models/blog");
const Projects = require("../models/projects");
const Profile = require("../models/profile");

const typeCheck = (type) => {
  switch (type) {
    case "blog":
      return Blog;
    case "projects":
      return Projects;
    case "profile":
      return Profile;
  }
};

// Get All
const getAll = async (req, res) => {
  const type = req.baseUrl.split("/")[2];
  const schema = typeCheck(type);

  try {
    const data = await schema.find();
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: `Couldn't find the ${type} data`,
    });
  }
};

//Get By id
const getById = async (schema, id) => {
  try {
    const data = await schema.findById(id);
    return data;
  } catch (error) {
    return null;
  }
};

// Get One by filter or id
const getOneByFilter = async (req, res) => {
  const type = req.baseUrl.split("/")[2];
  const schema = typeCheck(type);
  const urlParam = req.params.id;

  let data;

  try {
    data = await schema.findOne({
      $or: [{ filter: urlParam }, { title: urlParam }],
    });

    if (!data) {
      data = await getById(schema, urlParam);
    }

    if (!data) {
      return res.status(404).json({ message: "not found" });
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({
      message: `Server error`,
      err: err,
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
exports.getOneByFilter = getOneByFilter;
exports.deleteById = deleteById;
exports.addData = addData;
exports.editData = editData;

const express = require("express");
var router = express.Router();

const user = require("./auth-router");
const blog = require("./blog-router");

router.use("/usuario", user);
router.use("/blog", blog);
// router.use("/projects");
// router.use("/contents");

module.exports = router;

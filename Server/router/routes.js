const express = require("express");
const router = express.Router();

// Basic CRUD for general management
const basicCrud = require("./router");
// User Autorization and Authentication
const user = require("./auth-router");

router.use("/auth", user);
router.use("/blog", basicCrud);
router.use("/projects", basicCrud);
router.use("/profile", basicCrud);

module.exports = router;

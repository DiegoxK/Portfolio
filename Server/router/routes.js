const express = require("express");
const router = express.Router();

const basicCrud = require("./router");
const user = require("./auth-router");

router.use("/auth", user);
router.use("/blog", basicCrud);
router.use("/projects", basicCrud);
router.use("/profile", basicCrud);

module.exports = router;

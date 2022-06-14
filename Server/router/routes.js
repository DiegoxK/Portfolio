const express = require("express");
const router = express.Router();

const crudRouter = require("./router");
const user = require("./auth-router");

router.use("/auth", user);
router.use("/blog", crudRouter);
router.use("/projects", crudRouter);
router.use("/contents", crudRouter);
router.use("/profile", crudRouter);

module.exports = router;

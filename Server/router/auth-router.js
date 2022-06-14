const express = require("express");

const {
  signup,
  login,
  verifyToken,
  getUser,
  logout,
} = require("../controller/auth-controler");

const router = express.Router();

router.post("/Register", signup);
router.post("/Login", login);
router.get("/User", verifyToken, getUser);
router.post("/LogOut", verifyToken, logout);

module.exports = router;

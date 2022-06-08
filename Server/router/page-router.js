const express = require("express");
require("dotenv").config();
const {
  signup,
  login,
  verifyToken,
  getUser,
  logout,
} = require("../controller/auth-controler");

const router = express.Router();

router.post(process.env.SIGNUP_ROUTE, signup);
router.post(process.env.LOGIN_ROUTE, login);
router.get(process.env.GET_USER_ROUTE, verifyToken);
router.post(process.env.LOGOUT_ROUTE, verifyToken, logout);

module.exports = router;

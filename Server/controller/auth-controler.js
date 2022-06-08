const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

// ===========================================================================

const signup = async (req, res) => {
  const { userName, password } = req.body;

  let existingUser;

  // User already exists
  try {
    existingUser = await User.findOne({ userName });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: "User Already exist" });
  }

  // Singup new user
  const hashedPassword = bcrypt.hashSync(password);

  const user = new User({
    userName,
    password: hashedPassword,
  });

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }

  return res.status(201).json({ message: "Usuario Registrado" });
};

// ===========================================================================

const login = async (req, res) => {
  const { userName, password } = req.body;
  let existingUser;

  // check if user exist
  try {
    existingUser = await User.findOne({ userName });
  } catch (err) {
    return new Error(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "User Not found. Singup" });
  }

  //Compare the existing user password
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "invalid email / password" });
  }

  // Generate the web token
  const token = jwt.sign({ id: existingUser._id }, JWT_KEY, {
    expiresIn: "1d",
  });

  // Create server cookie
  res.cookie(String(existingUser._id), token, {
    path: "/",
    expires: new Date(Date.now() + 86400000),
    httpOnly: true,
    sameSite: "lax",
  });

  // Login response
  return res.status(200).json({ message: "Successfully Logged In" });
};

// ===========================================================================

const verifyToken = (req, res, next) => {
  const cookies = req.headers.cookie;

  // check if cookie attached to the token exists
  if (!cookies) {
    return res.status(404).json({ message: "No token found / expired" });
  }
  const token = cookies.split("=")[1];

  // Verify if the token is correct
  jwt.verify(String(token), JWT_KEY, (err) => {
    if (err) {
      return res.status(400).json({ message: "invalid token" });
    }

    // Assign the user to the req that will be passed to getUser
    // req.id = user.id;

    return res.json({ messaage: "Successfull" });
  });

  // next();
};

// const getUser = async (req, res) => {
//   const userId = req.id;
//   let user;

//   // Get the user info
//   try {
//     user = await User.findById(userId, "-password");
//   } catch (err) {
//     return new Error(err);
//   }

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   return res.status(200).json({ user });
// };

// ===========================================================================

const logout = (req, res) => {
  const cookies = req.headers.cookie;
  const prevToken = cookies.split("=")[1];
  if (!prevToken) {
    return res.status(400).json({ message: "Couldn't find token" });
  }
  jwt.verify(String(prevToken), process.env.JWT_KEY, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Authentication failed" });
    }
    res.clearCookie(`${user.id}`);
    req.cookies[`${user.id}`] = "";
    return res.status(200).json({ message: "Successfully Logged Out" });
  });
};

exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
// exports.getUser = getUser;
exports.logout = logout;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../schema/userModel");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(409).json({ Message: "Email has already existed" });
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
  });

  const payload = {
    id: newUser._id,
  };
  const token = jwt.sign(payload, JWT_SECRET);
  await User.findByIdAndUpdate(newUser._id, { token });

  res.status(201).json({
    name,
    email,

    token,
  });
};

module.exports = register;

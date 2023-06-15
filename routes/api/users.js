const express = require("express");

const { ctrlWrapper } = require("../../helpers");
const { register, login } = require("../../controllers/auth");
const {
  joiUserSchema,
  joiLoginSchema,
} = require("../../schema/validationJoi");
const { validation } = require("../../middleware");

const router = express.Router();

router.post("/register", validation(joiUserSchema), ctrlWrapper(register));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(login));

module.exports = router;
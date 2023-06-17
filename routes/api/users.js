const express = require("express");

const { ctrlWrapper } = require("../../helpers");
const { register, login, currentUser, logout } = require("../../controllers/auth");
const {authenticate} = require("../../middleware")
const {
  joiUserSchema,
  joiLoginSchema,
} = require("../../schema/validationJoi");
const { validation } = require("../../middleware");

const router = express.Router();

router.post("/register", validation(joiUserSchema), ctrlWrapper(register));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(login));

router.post("/logout", authenticate, ctrlWrapper(logout));


router.get("/currentUser",  authenticate,  ctrlWrapper(currentUser)
);

module.exports = router;
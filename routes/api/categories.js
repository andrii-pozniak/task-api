const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const validation = require("../../middleware/validation");
const { joiCategoryAddSchema } = require("../../schema/validationJoi");

const { getAllCategories, addCategory } = require("../../controllers/categories");

router.get("/", ctrlWrapper(getAllCategories));

router.post("/create", validation(joiCategoryAddSchema), ctrlWrapper(addCategory));

module.exports = router;
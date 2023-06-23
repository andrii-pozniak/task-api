const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const validation = require("../../middleware/validation");
const { joiCategoryAddSchema } = require("../../schema/validationJoi");
// const {authenticate} = require("../../middleware")

const {
  getAllCategories,
  addCategory,
  deleteCategory,
  updateCategory,
} = require("../../controllers/categories");

router.get("/", ctrlWrapper(getAllCategories));

router.post(
  "/create",
  validation(joiCategoryAddSchema),
  ctrlWrapper(addCategory)
);

router.delete("/:id", ctrlWrapper(deleteCategory));

router.put(
  "/:id",
  validation(joiCategoryAddSchema),
  ctrlWrapper(updateCategory)
);

module.exports = router;

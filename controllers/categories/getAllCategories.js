const { Category } = require("../../schema/CategoryModel");
const { HttpError } = require("../../helpers/apiHelper");

const getAllCategories = async (req, res) => {
  
  const category = await Category.find().sort({ createdAt: -1 });

  if (!category) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(category);
};

module.exports = getAllCategories;
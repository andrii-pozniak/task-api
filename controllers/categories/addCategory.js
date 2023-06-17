const { Category } = require("../../schema/CategoryModel");

const addCategory = async (req, res, next) => {
  const { body } = req;
  const { id } = req.params;

  const newCategory = await Category.create({
    ...body,    
    _id: id,
  });
  res.status(201).json(newCategory);
};

module.exports = addCategory;
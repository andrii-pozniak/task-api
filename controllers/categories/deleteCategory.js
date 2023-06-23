const { Category } = require("../../schema/CategoryModel");

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  const result = await Category.findByIdAndRemove( id );

  if (!result) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.status(200).json(result);
};
module.exports = deleteCategory;
const { Category } = require("../../schema/CategoryModel");


const updateCategory = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updateCategory = await Category.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updateCategory) {
        return res.status(404).json({
          status: "error",
          code: 404,
          massage: `Contacts with id = ${id} not found`,
        });
      }
      return res.status(200).json(updateCategory);
    } catch (error) {
      next(error);
    }
  };

  module.exports = updateCategory;
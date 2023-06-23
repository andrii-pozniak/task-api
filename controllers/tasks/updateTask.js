const { Task } = require("../../schema/TasksModel");

const updateTask = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updateTask = await Task.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updateTask) {
        return res.status(404).json({
          status: "error",
          code: 404,
          massage: `Contacts with id = ${id} not found`,
        });
      }
      return res.status(200).json(updateTask);
    } catch (error) {
      next(error);
    }
  };

  module.exports = updateTask;
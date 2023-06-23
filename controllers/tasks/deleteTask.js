const { Task } = require("../../schema/TasksModel");

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const result = await Task.findByIdAndRemove( id );

  if (!result) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.status(200).json(result);
};
module.exports = deleteTask;
const { Task } = require("../schema/TasksModel");
const { HttpError } = require("../../helpers/apiHelper");

const getAllTasks = async (req, res) => {
  
  const tasks = await Task.find().sort({ createdAt: -1 });

  if (!tasks) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(tasks);
};

module.exports = getAllTasks;
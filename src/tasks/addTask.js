const { Task } = require("../schema/TasksModel");

const addTask = async (req, res, next) => {
  const { body } = req;
  const { id } = req.params;

  const newTask = await Task.create({
    ...body,    
    _id: id,
  });
  res.status(201).json(newTask);
};

module.exports = addTask;
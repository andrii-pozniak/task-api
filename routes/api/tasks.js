const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const validation = require("../../middleware/validation");
const { joiTaskAddSchema } = require("../../schema/validationJoi");

const { getAllTasks, addTask, updateTask, deleteTask } = require("../../controllers/tasks");

router.get("/", ctrlWrapper(getAllTasks));

router.post("/create", validation(joiTaskAddSchema), ctrlWrapper(addTask));

router.delete("/:id", ctrlWrapper(deleteTask));


router.put(
    "/:id",
    validation(joiTaskAddSchema),
    ctrlWrapper(updateTask)
  );
  

module.exports = router;
const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");
const validation = require("../../middleware/validation");
const { joiTaskAddSchema } = require("../../schema/validationJoi");

const { getAllTasks, addTask } = require("../../controllers/tasks");


router.get("/", ctrlWrapper(getAllTasks));

router.post("/create", validation(joiTaskAddSchema), ctrlWrapper(addTask));

module.exports = router;
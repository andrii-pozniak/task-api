const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: {
    type: String,
    minLength: 2,
    trim: true,
    match: [
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      "Only letters can be accepted",
    ],
    required: [true, "Name is required"],
    default: "Task",
  },
  dataStart: Date,
  dataEnd: Date,
  id: {
    type: String,
    required: [true, "CategoryId is required"],   
  },
  description: {
    type: String,
    required: [true, "Description is required"],  
  },
});

const Task = model("task", taskSchema);

module.exports = { Task };

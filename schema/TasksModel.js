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
      
})

const Task = model("task", taskSchema);

module.exports = { Task };

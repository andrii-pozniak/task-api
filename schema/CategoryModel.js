const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    minLength: 2,
    trim: true,
    match: [
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      "Only letters can be accepted",
    ],
    required: [true, "Name is required"],
    default: "Category",
  },
  dataStart: Date,
  dataEnd: Date,
});

const Category = model("category", categorySchema);

module.exports = { Category };
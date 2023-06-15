const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for user"],
    },
    email: {
      type: String,
      required: [true, "Set email address for user"],
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    
    // avatarURL: {
    //   type: String,
    //   required: true,
    // },   
   
    token: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

module.exports = { User };
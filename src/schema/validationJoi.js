const Joi = require("joi");

const joiTaskAddSchema = Joi.object({
    name: Joi.string().min(2),
    dataStart: Date,
    dataEnd: Date,
})

module.exports = { joiTaskAddSchema };
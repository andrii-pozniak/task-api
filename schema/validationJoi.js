const Joi = require("joi");
const nameRegexp = /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/;
const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]*$/;
const passwordRegexp = /^[a-zA-Z0-9а-яА-Я]+$/;

const joiTaskAddSchema = Joi.object({
  name: Joi.string().min(2),
  dataStart: Date,
  dataEnd: Date,
});

const joiCategoryAddSchema = Joi.object({
  name: Joi.string().min(2),
  dataStart: Date,
  dataEnd: Date,
});

const joiUserSchema = Joi.object({
  name: Joi.string().pattern(nameRegexp).required(),
  password: Joi.string().pattern(passwordRegexp).min(7).max(32).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});
const joiLoginSchema = Joi.object({
  password: Joi.string().pattern(passwordRegexp).min(7).max(32).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = { joiTaskAddSchema, joiUserSchema, joiLoginSchema, joiCategoryAddSchema };

import { Joi, Segments } from "celebrate";
import { TAGS } from "../constants/tags.js";
import { isValidObjectId } from "mongoose";


export const getAllNotesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1).messages({
      "number.base": "Page must be a number",
      "number.min": "Page must be at least {#limit}",
    }),
    perPage: Joi.number().integer().min(5).max(20).default(10).messages({
      "number.base": "Limit must be a number",
      "number.min": "Limit must be at least {#limit}",
      "number.max": "Limit must be at most {#limit}",
    }),
    tag: Joi.string().valid(...TAGS).messages({
      "string.base": "Tags must be a string",
      "any.only": "Tags must be one of the following: {#valids}",
    }),
    search: Joi.string().trim().allow(''),
  }),
};

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).max(100).required().messages({
      "string.base": "Title must be a string",
      "string.min": "Title should have at least {#limit} characters",
      "string.max": "Title should have at most {#limit} characters",
      "any.required": "Title is required",
    }),
    content: Joi.string().allow(''),
    tag: Joi.string().valid(...TAGS).messages({
      "string.base": "Tags must be a string",
      "any.only": "Tags must be one of the following: {#valids}",
    }),
  }),
};

export const noteIdSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom((value, helpers) => {
      if (!isValidObjectId(value)) {
        return helpers.message("noteId має бути коректним MongoDB ObjectId");
      }
      return value;
    }).required(),
  }),
};

export const updateNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).max(100).messages({
      "string.base": "Title must be a string",
      "string.min": "Title should have at least {#limit} characters",
      "string.max": "Title should have at most {#limit} characters",
      "any.required": "Title is required",
    }),
    content: Joi.string().allow(''),
    tag: Joi.string().valid(...TAGS).messages({
      "string.base": "Tags must be a string",
      "any.only": "Tags must be one of the following: {#valids}",
    }),
  }).min(1),
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom((value, helpers) => {
      if (!isValidObjectId(value)) {
        return helpers.message("any.invalid");
      }
      return value;
    }).required(),
  }),
};

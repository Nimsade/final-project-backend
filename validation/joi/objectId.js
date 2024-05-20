import Joi from "joi";

const objectIdSchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

const validateObjectIdSchema =async (id) => {
  return await objectIdSchema.validateAsync({ id });
};

export default validateObjectIdSchema;

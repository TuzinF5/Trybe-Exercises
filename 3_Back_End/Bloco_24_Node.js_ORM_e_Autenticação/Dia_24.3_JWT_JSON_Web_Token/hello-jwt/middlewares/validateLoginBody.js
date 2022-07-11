const Joi = require('joi');

const schemaBody = Joi.object({
  username: Joi.string().alphanum().min(5).required(),
  password: Joi.string().min(5).required(),
});

module.exports = (req, _res, next) => {
  const { error } = schemaBody.validate(req.body);

  if (error) {
    return next(error);
  }

  return next();
};

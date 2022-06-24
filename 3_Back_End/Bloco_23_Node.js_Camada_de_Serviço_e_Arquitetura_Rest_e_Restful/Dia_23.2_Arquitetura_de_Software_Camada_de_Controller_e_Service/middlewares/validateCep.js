const Joi = require('joi');

const cepRegex = new RegExp(/\d{5}-?\d{3}/);

const schema = Joi.object({
  cep: Joi.string().regex(cepRegex).required().max(9),
});

const validateCep = (req, _res, next) => {
  const { cep } = req.params;

  const { error } = schema.validate({ cep });

  if (error) {
    return next({
      status: 400,
      error: { code: 'invalidData', message: 'CEP inválido' },
    });
  }

  return next();
};

module.exports = validateCep;

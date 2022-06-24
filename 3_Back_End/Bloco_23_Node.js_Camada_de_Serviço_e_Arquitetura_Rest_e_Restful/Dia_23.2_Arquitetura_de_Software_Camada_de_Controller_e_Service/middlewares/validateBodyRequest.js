const Joi = require('joi');

const cepRegex = new RegExp(/\d{5}-\d{3}/);

const schema = Joi.object({
  cep: Joi.string().required().length(9).regex(cepRegex),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().required(),
});

const validateBodyRequest = (req, _res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { error } = schema.validate({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  });

  if (error) {
    return next({
      status: 400,
      error: { code: 'invalidData', message: error.message },
    });
  }

  return next();
};

module.exports = validateBodyRequest;

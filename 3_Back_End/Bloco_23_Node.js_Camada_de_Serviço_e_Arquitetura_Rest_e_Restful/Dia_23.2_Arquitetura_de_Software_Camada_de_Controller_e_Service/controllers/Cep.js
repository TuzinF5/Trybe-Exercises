const Cep = require('../services/Cep');

const getCep = async (req, res, next) => {
  const { cep } = req.params;

  const result = await Cep.getCep(cep);

  if (result.error) return next(result);

  return res.status(200).json(result);
};

const create = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const result = await Cep.create({ cep, logradouro, bairro, localidade, uf });

  if (result.error) return next(result);

  return res.status(201).json(result);
};

module.exports = { getCep, create };

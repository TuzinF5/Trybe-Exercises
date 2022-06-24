const Cep = require('../services/Cep');

const getCep = async (req, res, next) => {
  const { cep } = req.params;

  const result = await Cep.getCep(cep);

  if (result.error) return next(result);

  return res.status(200).json(result);
};

module.exports = { getCep };

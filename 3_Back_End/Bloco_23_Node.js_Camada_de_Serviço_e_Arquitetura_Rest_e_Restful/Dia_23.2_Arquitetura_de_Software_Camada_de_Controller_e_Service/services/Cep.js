const Cep = require('../models/Cep');

const getCep = async (cep) => {
  const cepClean = cep.replace('-', '');

  const result = await Cep.getCep(cepClean);

  if (!result) {
    return {
      status: 404,
      error: { code: 'notFound', message: 'CEP não encontrado' },
    };
  }

  const commomCep = `${result.cep.substr(0, 5)}-${result.cep.substr(5)}`;

  return {
    ...result,
    cep: commomCep,
  };
};

module.exports = { getCep };

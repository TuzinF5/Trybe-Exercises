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

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const result = await getCep(cep);

  if (result.cep) {
    return {
      status: 409,
      error: { code: 'alreadyExists', message: 'CEP já existente' },
    };
  }

  const cepClean = cep.replace('-', '');

  await Cep.create({ cep: cepClean, logradouro, bairro, localidade, uf });

  return { cep, logradouro, bairro, localidade, uf };
};

module.exports = { getCep, create };

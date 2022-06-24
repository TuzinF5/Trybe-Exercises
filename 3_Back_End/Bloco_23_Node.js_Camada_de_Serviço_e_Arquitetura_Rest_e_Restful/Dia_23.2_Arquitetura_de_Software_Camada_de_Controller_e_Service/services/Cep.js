const Cep = require('../models/Cep');
const CepAPI = require('../models/CepAPI');

const getCep = async (cepApi) => {
  const cepClean = cepApi.replace('-', '');

  const result = await Cep.getCep(cepClean);

  if (!result) {
    const {
      data,
      data: { cep, logradouro, bairro, localidade, uf },
    } = await CepAPI.getCep(cepClean);

    if (data.erro) {
      return {
        status: 404,
        error: { code: 'notFound', message: 'CEP não encontrado' },
      };
    }

    await Cep.create({ cep: cepClean, logradouro, bairro, localidade, uf });

    return { cep, logradouro, bairro, localidade, uf };
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

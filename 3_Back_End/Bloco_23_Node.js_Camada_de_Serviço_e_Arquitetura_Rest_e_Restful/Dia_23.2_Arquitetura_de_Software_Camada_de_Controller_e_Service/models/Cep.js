const connection = require('./connection');

const getCep = async (cep) => {
  const query =
    'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?;';

  const [result] = await connection.execute(query, [cep]);

  if (result.length === 0) return null;

  const [cepFound] = result;

  return cepFound;
};

module.exports = { getCep };

const connection = require('./connection');

const getCep = async (cep) => {
  const query =
    'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?;';

  const [result] = await connection.execute(query, [cep]);

  if (result.length === 0) return null;

  const [cepFound] = result;

  return cepFound;
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query =
    'INSERT ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?);';

  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
};

module.exports = { getCep, create };

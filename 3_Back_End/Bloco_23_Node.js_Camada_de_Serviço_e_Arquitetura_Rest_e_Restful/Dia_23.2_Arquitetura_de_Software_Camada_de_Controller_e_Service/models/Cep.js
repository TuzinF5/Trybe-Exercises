const connection = require('./connection');

const getCep = async (cep) => {
  const query =
    'SELECT C.cep, C.logradouro, B.bairro, B.localidade, B.uf FROM ceps AS C INNER JOIN bairros AS B ON C.bairro_id = B.id;';

  const [result] = await connection.execute(query, [cep]);

  if (result.length === 0) return null;

  const [cepFound] = result;

  return cepFound;
};

const create = async ({ cep, logradouro, bairro_id }) => {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro_id) VALUES (?, ?, ?);';

  await connection.execute(query, [cep, logradouro, bairro_id]);
};

module.exports = { getCep, create };

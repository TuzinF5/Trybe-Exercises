const connection = require('./connection');

const findByBairro = async (bairro) => {
  const query =
    'SELECT id, bairro, localidade, uf FROM bairros WHERE bairro = ?;';

  const [{ id }] = await connection.execute(query, [bairro]);

  return id;
};

const create = async ({ bairro, localidade, uf }) => {
  const query =
    'INSERT INTO bairros (bairro, localidade, uf) VALUES (?, ?, ?);';

  const [{ insertId }] = await connection.execute(query, [
    bairro,
    localidade,
    uf,
  ]);

  return insertId;
};

module.exports = { create, findByBairro };

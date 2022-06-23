const connection = require('./connection');

const create = async ({ firstName, lastName, email, password }) => {
  const query =
    'INSERT INTO users_crud.users (first_name, last_name, email, `password`) VALUES (?, ?, ?, ?);';

  const [{ insertId }] = await connection.execute(query, [
    firstName,
    lastName,
    email,
    password,
  ]);

  return insertId;
};

module.exports = { create };

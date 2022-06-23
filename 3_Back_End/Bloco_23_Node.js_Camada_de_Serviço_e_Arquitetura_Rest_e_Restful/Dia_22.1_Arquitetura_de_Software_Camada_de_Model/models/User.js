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

const getAll = async () => {
  const query =
    'SELECT id, first_name, last_name, email FROM users_crud.users;';

  const [users] = await connection.execute(query);

  return users;
};

module.exports = { create, getAll };

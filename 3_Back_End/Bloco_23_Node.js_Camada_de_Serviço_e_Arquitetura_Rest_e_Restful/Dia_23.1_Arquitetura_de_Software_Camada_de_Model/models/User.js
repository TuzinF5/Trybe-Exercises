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

const findById = async (id) => {
  const query =
    'SELECT id, first_name, last_name, email FROM users_crud.users WHERE id = ?;';

  const [user] = await connection.execute(query, [id]);

  if (user.length === 0) return null;

  return user;
};

const update = async ({ firstName, lastName, email, password, id }) => {
  const user = await findById(id);

  if (!user) return false;

  const query =
    'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, `password` = ? WHERE id = ?;';

  const [{ affectedRows }] = await connection.execute(query, [
    firstName,
    lastName,
    email,
    password,
    id,
  ]);

  if (affectedRows === 0) return false;

  return true;
};

module.exports = { create, getAll, findById, update };

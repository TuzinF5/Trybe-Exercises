const mysql = require('mysql2/promise');
require('dotenv/config');

const { HOST_DB, USER_DB, PASSWORD_DB, DATABASE_NAME } = process.env;

const connection = mysql.createPool({
  host: HOST_DB,
  user: USER_DB,
  password: PASSWORD_DB,
  database: DATABASE_NAME,
});

module.exports = connection;

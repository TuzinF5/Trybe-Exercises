const { Book } = require('../models');

const getAll = async () => {
  try {
    const books = await Book.findAll();
    return books;
  } catch (error) {
    console.error(error.message);
  }
};

const getById = async (id) => {
  try {
    const books = await Book.findByPk(id);
    return books;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getAll, getById };

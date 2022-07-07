const { Book } = require('../models');

const getAll = async () => {
  try {
    const books = await Book.findAll();
    return books;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getAll };

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

const create = async ({ title, author, pageQuantity }) => {
  try {
    const book = await Book.create({ title, author, pageQuantity });
    return book;
  } catch (error) {
    console.error(error.message);
  }
};

const update = async (id, { title, author, pageQuantity }) => {
  try {
    const [book] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    );
    return book;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getAll, getById, create, update };

const BooksService = require('../services/BooksService');

const getAll = async (_req, res) => {
  try {
    const books = await BooksService.getAll();

    return res.status(200).json(books);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BooksService.getById(Number(id));

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getAll, getById };

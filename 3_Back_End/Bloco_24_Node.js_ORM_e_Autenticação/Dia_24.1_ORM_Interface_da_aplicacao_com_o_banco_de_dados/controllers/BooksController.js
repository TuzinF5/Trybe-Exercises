const BooksService = require('../services/BooksService');

const getAll = async (_req, res) => {
  try {
    const books = await BooksService.getAll();

    return res.status(200).json(books);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json('Algo deu errado');
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
    return res.status(500).json('Algo deu errado');
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await BooksService.create({ title, author, pageQuantity });

    return res.status(201).json(book);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json('Algo deu errado');
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const book = await BooksService.update(Number(id), {
      title,
      author,
      pageQuantity,
    });

    if (book === 0) {
      return res.status(404).json('Book not found!');
    }

    return res.status(200).json('Book updated!');
  } catch (error) {
    console.error(error.message);
    return res.status(500).json('Algo deu errado');
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BooksService.remove(Number(id));

    return res.status(204).end();
  } catch (error) {
    console.error(error.message);
    return res.status(500).json('Algo deu errado');
  }
};

module.exports = { getAll, getById, create, update, remove };

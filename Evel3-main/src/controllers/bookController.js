const Book = require('../models/Book');

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

const createBook = async (req, res) => {
  const { title, author, description } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: 'Title and Author are required' });
  }
  try {
    const newBook = await Book.create({ title, author, description });
    res.status(201).json(newBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getAllBooks, createBook };

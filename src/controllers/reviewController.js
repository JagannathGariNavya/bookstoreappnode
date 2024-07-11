const Review = require('../models/Review');

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

const createReview = async (req, res) => {
  const { bookId, rating, reviewText } = req.body;
  try {
    console.log();
    const newReview = await Review.create({ bookId, rating, reviewText });
    res.status(201).json(newReview);
    console.log("we got error in creating");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getAllReviews, createReview };

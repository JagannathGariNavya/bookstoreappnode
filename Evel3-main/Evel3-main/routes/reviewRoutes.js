const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/reviews/:bookId', reviewController.getAllReviews);
router.post('/reviews', reviewController.createReview);

module.exports = router;

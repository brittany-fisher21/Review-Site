const express = require('express'),
    router = express.Router(),
    ReviewsModel = require('../models/reviews');

router.post('/add', async (req, res) => {
    const { user_id, wine_id, reviews } = req.body;
    const Review = new ReviewsModel(null, user_id, wine_id, reviews);
    const response = await Review.addReview();
    if (response.rowCount >= 1) {
        res.redirect('back');
    } else {
        res.sendStatus(500);
    }
});

router.post('/delete', (req, res) => {
    console.log('Deleting a review');
});

module.exports = router;
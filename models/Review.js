const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user_id:{ type: String, required: false },
    tour_id:{ type: String, required: false },
    rating:{ type: String, required: false },
    comment:{ type: String, required: false }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
const mongoose = require('mongoose');
const Schema = mongoose.Schema


const reviewSchema = new Schema({
    user_name:{ type: String, required: false },
    tour_id:{ type: String, required: false },
    rating:{ type: String, required: false },
    comment:{ type: String, required: false }
},{ timestamps: true, versionKey: false });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
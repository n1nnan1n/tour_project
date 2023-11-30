const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  tour_name:{ type: String, required: false },
  tour_description:{ type: String, required: false },
  tour_itinerary:{ type: String, required: false },
  tour_image:{type: Array, required: true},
  tour_status:{ type: String, required: false },
  tour_cancelpolicy:{ type: String, required: false },
  tour_include:{ type: String, required: false },
  tour_knowbefore:{ type: String, required: false },
  tour_whattobring:{ type: String, required: false },
  price_detail:{ type: String, required: false },
  price:{ type: Number, required: false }
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
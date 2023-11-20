const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  tour_name:{ type: String, required: false },
  tour_description:{ type: String, required: false },
  tour_itinerary:{ type: String, required: false },
  tour_image:{ type: String, required: false },
  tour_status:{ type: String, required: false },
  price:{ type: String, required: false }
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
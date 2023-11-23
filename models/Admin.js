const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  first_name:{ type: String, required: false },
  tour_description:{ type: String, required: false },
  tour_itinerary:{ type: String, required: false },
  tour_image:{ type: String, required: false },
  tour_status:{ type: String, required: false },
  price:{ type: String, required: false }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
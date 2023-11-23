const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
    user_id:{ type: String, required: false },
    tour_id:{ type: String, required: false },
    date_status:{ type: String, required: false },
    tour_quantity:{ type: String, required: false }
});

const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;
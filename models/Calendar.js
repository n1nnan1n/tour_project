const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
    tour_id:{ type: String, required: false },
    closed_date:{ type: String, required: false },
    tour_quantity:{ type: String, required: false }
},{ timestamps: true, versionKey: false });

const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const calendarSchema = new Schema({
    closed_date:{ type: String, required: false },
    date_status:{ type: String, required: false }
},{ timestamps: true, versionKey: false });

const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;
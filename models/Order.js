const mongoose = require('mongoose');
const Schema = mongoose.Schema

const orderSchema = new Schema({
    order_status:{ type: String, required: false },
    title:{ type: String, required: false },
    user_id:{ type: String, required: false },
    user_firstname:{ type: String, required: false },
    user_lastname:{ type: String, required: false },
    user_email:{ type: String, required: false },
    tour_id:{ type: String, required: false },
    tour_name: { type: String, required: false },
    tour_price: { type: Number, required: false },
    tour_date:{ type: String, required: false },
    quantity: { type: Number, required: false },
    total_price: { type: Number, required: false }
},{ timestamps: true, versionKey: false });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
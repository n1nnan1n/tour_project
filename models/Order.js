const mongoose = require('mongoose');
const Schema = mongoose.Schema

const orderSchema = new Schema({
    user_id:{ type: String, required: false },
    tour_id:{ type: String, required: false },
    quantity:{ type: Number, required: false },
    tour_date:{ type: Date, required: false },
    total_price:{ type: Number, required: false },
    order_status:{ type: String, required: false }
},{ timestamps: true, versionKey: false });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const orderSchema = new Schema({
    user_id:{ type: String, required: false },
    tour_id:{ type: String, required: false },
    quantity:{ type: String, required: false },
    tour_datetime:{ type: String, required: false },
    total_price:{ type: String, required: false },
    order_date:{ type: String, required: false },
    pay_by:{ type: String, required: false },
    order_status:{ type: String, required: false }
},{ timestamps: true, versionKey: false });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
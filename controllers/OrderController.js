const Tour = require('../models/tour');
const Order = require('../models/order');
var User = require('../models/user');

const placeOrder = async (req, res) =>{
    const { user_id,
      tour_id,
      quantity,
      tour_date,
      total_price,
      order_date,
      pay_by,
      order_status } = req.body;

  // Validate the input
  if (!user_id ||
    !tour_id ||
    isNaN(quantity) ||
    quantity <= 0 ||
    isNaN(total_price) ||
    !tour_date ||
    !order_date ||
    !pay_by ||
    !order_status) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  try {
    // Find the selected tour
    const selectedTour = await Tour.findById(_id);

    if (!selectedTour) {
      return res.status(404).json({ error: 'Tour not found' });
    }

    // Calculate the total price
    const totalPrice = selectedTour.tour_price * quantity;

    // Here, you can perform any additional logic, such as storing the order in a database
    const newOrder = new Order({ user_id,tour_id,quantity,tour_datetime, total_price, order_date, pay_by, order_status, created_at});
      await newOrder.save();

    res.json({
      _id,
      tour_name: selectedTour.tour_name,
      quantity,
      total_price: totalPrice
    });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = { placeOrder };
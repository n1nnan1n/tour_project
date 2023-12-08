const Tour = require('../models/tour');
const Order = require('../models/order');
var User = require('../models/user');

const placeOrder = async (req, res) =>{
    const { user_id,
      tour_id,
      quantity,
      tour_date
    } = req.body;

  // Validate the input
  if (!user_id ||
    !tour_id ||
    isNaN(quantity) ||
    quantity <= 0 ||
    !tour_date ) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  try {
    // Find the selected tour
    const selectedTour = await Tour.findById(tour_id);
    const selectedUser = await User.findById(user_id);

    if (!selectedTour) {
      return res.status(404).json({ error: 'Tour not found' });
    }
    if (!selectedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Calculate the total price
     const totalPrice = selectedTour.price * quantity;

    // Here, you can perform any additional logic, such as storing the order in a database
    const newOrder = new Order({ user_id:user_id,tour_id:tour_id,quantity:quantity,tour_date:tour_date,total_price:totalPrice,order_status:"wait for travel"});
      await newOrder.save();

    res.json({
      order:"Successful",
      userID:selectedUser._id,
      user_firstname:selectedUser.fname,
      user_lastname:selectedUser.lname,
      user_email:selectedUser.email,
      tour_name: selectedTour.tour_name,
      quantity:quantity,
      total_price: totalPrice
    });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = { placeOrder };
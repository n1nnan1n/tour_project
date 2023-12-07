const Tour = require('../models/tour');
const Order = require('../models/order');
var User = require('../models/user');

const AllOrder = async (req, res) =>{
    const { admin_id } = req.body;
    const admin = await User.findById({ admin_id });

  try {
    if (!admin) {
        return res.status(401).json({ error: 'Invalid admin' });
      }

    res.json({
      _id,
      tour_name: selectedTour.tour_name,
      quantity,
      total_price: totalPrice
    });
  } catch (error) {
    console.error('Error calling order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = { AllOrder };
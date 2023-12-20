const Tour = require('../models/tour');
const Order = require('../models/order');
var User = require('../models/user');

const orderCalculate = async (req, res) =>{  
try {
  if (loggedIn) {
    res.send('You loggedIn');
    return;
  }

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
     const totalPrice = selectedTour.price*quantity;
     
    res.json({
      title:selectedUser.title,
      user_id:selectedUser._id,
      user_firstname:selectedUser.fname,
      user_lastname:selectedUser.lname,
      user_email:selectedUser.email,
      tour_id:selectedTour._id,
      tour_name: selectedTour.tour_name,
      tour_price: selectedTour.price,
      tour_date:tour_date,
      quantity:quantity,
      total_price: totalPrice
    });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const GetUserOrder = async (req, res) =>{
  try {
    if (loggedIn) {
      res.send('You loggedIn');
      return;
    }
  const { orderID } = req.params;

  // Validate the input
  if (!orderID) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  const selectedOrder = await Order.findById({_id:orderID});
  
  if (selectedOrder) {
    res.json(selectedOrder)
  } else {
    // No order found with the specified criteria
    console.log('Order not found');
  }
}
 catch (error) {
  console.error('Error fetching order data:', error);
  res.status(500).json({ error: 'Internal Server Error' });
};
}

const SuccessOrder = async (req, res) => {
  try {
    if (loggedIn) {
      res.send('You loggedIn');
      return;
    }

    const { user_id, tour_id, quantity, tour_date, total_price } = req.body;

    // Validate the input
    if (!user_id || !tour_id || isNaN(quantity) || quantity <= 0 || !tour_date) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    // Find the selected tour
    const selectedTour = await Tour.findById(tour_id);
    const selectedUser = await User.findById(user_id);

    if (!selectedTour || !selectedUser) {
      return res.status(404).json({ error: 'Tour or User not found' });
    }

    // Calculate the total price
    const totalPrice = selectedTour.price * quantity;

    if (totalPrice !== total_price) {
      return res.status(400).json({ error: 'Price error' });
    }

    const newOrder = new Order({
      order_status: 'Success',
      title: selectedUser.title,
      user_id: selectedUser._id,
      user_firstname: selectedUser.fname,
      user_lastname: selectedUser.lname,
      user_email: selectedUser.email,
      tour_id: selectedTour._id,
      tour_name: selectedTour.tour_name,
      tour_price: selectedTour.price,
      tour_date: tour_date,
      quantity: quantity,
      total_price: totalPrice
    });

    await newOrder.save();

    res.json({
      order_id: newOrder._id.toString()
    });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const GetAllUserOrder = async (req, res) => {
  try {
    // Check for authentication
    if (loggedIn) {
      res.status(401).json({ error: 'Unauthorized access' });
      return;
    }

    // Correct parameter name
    const { userID } = req.params;

    // Validate the input
    if (!userID) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    // Find orders by user_id
    const selectedOrders = await Order.find({ user_id: userID });

    if (selectedOrders.length > 0) {
      res.json(selectedOrders);
    } else {
      // No orders found with the specified criteria
      console.log('Orders not found');
      res.json({ message: 'No orders found for the user' });
    }
  } catch (error) {
    console.error('Error fetching order data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { orderCalculate,GetUserOrder,SuccessOrder,GetAllUserOrder};
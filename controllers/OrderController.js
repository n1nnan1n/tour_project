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

// let isProcessing = false;

// const placeOrder = async (req, res) => {
//   try{
//     if (loggedIn) {
//       res.send('You loggedIn');
//       return;
//     }
//   const { user_id, tour_id, quantity, tour_date } = req.body;

//   // Validate the input
//   if (!user_id || !tour_id || isNaN(quantity) || quantity <= 0 || !tour_date) {
//     return res.status(400).json({ error: 'Invalid input data' });
//   }

//   // Check if another request is already in progress
//   if (isProcessing) {
//     return res.status(409).json({ error: 'Another request is already in progress' });
//   }


//     // Set the flag to indicate that a request is in progress
//     isProcessing = true;

//     // Find the selected tour
//     const selectedTour = await Tour.findById(tour_id);
//     const selectedUser = await User.findById(user_id);

//     if (!selectedTour) {
//       return res.status(404).json({ error: 'Tour not found' });
//     }
//     if (!selectedUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Calculate the total price
//     const totalPrice = selectedTour.price * quantity;

//     const newOrder = new Order({
//       order_status: 'Waiting',
//       title: selectedUser.title,
//       user_id: selectedUser._id,
//       user_firstname: selectedUser.fname,
//       user_lastname: selectedUser.lname,
//       user_email: selectedUser.email,
//       tour_id: selectedTour._id,
//       tour_name: selectedTour.tour_name,
//       tour_price: selectedTour.price,
//       tour_date: tour_date,
//       quantity: quantity,
//       total_price: totalPrice
//     });
    
//     await newOrder.save();

//     res.json({
//       placeorder: 'place order success',
//       user_firstname: selectedUser.fname,
//       user_lastname: selectedUser.lname,
//       order_id: newOrder._id.toString()
//     });
//   } catch (error) {
//     console.error('Error placing order:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   } finally {
//     // Reset the flag after processing is complete
//     isProcessing = false;
//   }
// };

// const GetUserOrder = async (req, res) =>{
//   if (loggedIn) {
//     res.send('You loggedIn');
//   } else {
//     res.redirect('/login');
//   }
//   const { orderID } = req.params;

//   // Validate the input
//   if (!orderID) {
//     return res.status(400).json({ error: 'Invalid input data' });
//   }

//   const selectedOrder = await Order.findById({_id:orderID});
  
//   if (selectedOrder) {
//     res.json({
//       order_id: selectedOrder._id,
//       order_status: selectedOrder.order_status,
//       title: selectedOrder.title,
//       user_firstname: selectedOrder.user_firstname,
//       user_lastname: selectedOrder.user_lastname
//     })
//   } else {
//     // No order found with the specified criteria
//     console.log('Order not found');
//   }
// };

// const DeleteOrder = async (req, res) =>{
//   const { orderID } = req.params;
//   // Validate the input
//   try {
//     // Find the order by ID
//     const order = await Order.findById({_id:orderID});

//     // Check if the order exists
//     if (!order) {
//       return res.status(404).json({ error: 'Order not found' });
//     }

//     // Delete the order
//     await Order.findByIdAndDelete(orderID);

//     res.json({ message: 'Order deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting order:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

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

module.exports = { orderCalculate,
  // placeOrder,
  // GetUserOrder,
  // DeleteOrder,
  SuccessOrder };
const Tour = require('../models/tour');
const Order = require('../models/order');
const Admin = require('../models/admin');
var User = require('../models/user');
//ทุกออร์เดอร์
const AllOrder = async (req, res) => {
  const { admin_id } = req.body;

  try {
    const admin = await Admin.findById(admin_id);

    if (!admin) {
      return res.status(401).json({ error: 'Invalid admin' });
    }

    const orders = await Order.find().sort({ createdAt: -1 });

    res.json({ orders });
  } catch (error) {
    console.error('Error calling order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
//เลือกจากเลขออร์เดอร์
const AdminSelectOrder = async (req, res) => {
  const { admin_id,order_id } = req.body;

  try {
    const admin = await Admin.findById(admin_id);

    if (!admin) {
      return res.status(401).json({ error: 'Invalid admin' });
    }

    const orders = await Order.findById(order_id);

    res.json({ orders });
  } catch (error) {
    console.error('Error calling order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
//เลือกจากชื่อทัวร์
const AdminTourNameOrder = async (req, res) => {
  const { admin_id, tour_name } = req.body;

  try {
    const admin = await Admin.findById(admin_id);

    if (!admin) {
      return res.status(401).json({ error: 'Invalid admin' });
    }

    const order = await Order.findOne({ tour_name }).sort({ createdAt: -1 });

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json({ order });
  } catch (error) {
    console.error('Error calling order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//เลือกจากวันทัวร์
const AdminTourDateOrder = async (req, res) => {
  const { admin_id, tour_date } = req.body;

  try {
    const admin = await Admin.findById(admin_id);

    if (!admin) {
      return res.status(401).json({ error: 'Invalid admin' });
    }

    // Assuming tour_date is a string in the format 'YYYY-MM-DD'
    const order = await Order.findOne({ tour_date }).sort({ createdAt: -1 });

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json({ order });
  } catch (error) {
    console.error('Error calling order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = { AllOrder,AdminSelectOrder,AdminTourNameOrder,AdminTourDateOrder };
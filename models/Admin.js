const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  first_name:{ type: String, required: false },
  last_name:{ type: String, required: false },
  email:{ type: String, required: false },
  password:{ type: String, required: false },
  phone:{ type: String, required: false }
},{ timestamps: true, versionKey: false });

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
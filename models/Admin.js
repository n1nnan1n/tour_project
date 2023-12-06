const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const adminSchema = new Schema({
  fname:{ type: String, required: false },
  lname:{ type: String, required: false },
  email:{ type: String, required: false },
  password:{ type: String, required: false },
  phone:{ type: String, required: false }
},{ timestamps: true, versionKey: false });

adminSchema.pre('save', async function () {
  const admin = this;
  if (admin.isModified('password')) {
    admin.password = await bcrypt.hash(admin.password, 10);
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
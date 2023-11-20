const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    birthdate: { type: Date, required: true },
    nationality: { type: String, required: true },
    phone: { type: String, required: true },
    food_allergy: { type: String, required: false },
    special_req: { type: String, required: false }
},{ timestamps: true, versionKey: false })

userSchema.pre('save', async function () {
    const user = this;
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  });

const User = mongoose.model('User', userSchema);

module.exports = User;
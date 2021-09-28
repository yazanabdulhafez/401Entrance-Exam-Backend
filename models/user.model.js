'use strict';

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String },
  favFruits: [{
    name: { type: String },
    image: { type: String },
    price: { type: Number }
  }]
});

const userModel = mongoose.model('fruit', userSchema);


const seedUsersData = () => {
  const yazan = new userModel({
    email: "fso361435@gmail.com",
    favFruits: [{
      name: "Apple",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      price: 35
    }]
  });
  yazan.save();
  console.log(yazan);
}

module.exports = { userModel, seedUsersData };
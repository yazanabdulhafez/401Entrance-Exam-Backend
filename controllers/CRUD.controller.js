'use strict';

const { userModel } = require("../models/user.model");



const getController = (req, res) => {
  const { email } = req.query;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      res.send(error.message);
    } else {
      res.send(userData);
    }
  })
};

const creatController = (req, res) => {
  const { email, name, image, price } = req.body;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      res.send(error.message);
    } else if (userData.favFruits.some(element => element.name === name && element.image === image &&
        element.price === price)) {
      res.send('data already exist');
    } else {
      userData.favFruits.push({ name: name, image: image, price: price });
      userData.save();
      res.send(userData);
    }
  })
};


const updateController = (req, res) => {
  const id = req.params.id;
  const { email, name, image, price } = req.body;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      res.send(error.message);
    } else {
      const index = userData.favFruits.findIndex(element => element._id == id);
      userData.favFruits.splice(index, 1, { name: name, image: image, price: price });
      userData.save();
      res.send(userData);
    }
  })
};

const deleteController = (req, res) => {
  const id = req.params.id;
  const { email } = req.query;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      res.send(error.message);
    } else {
      userData.favFruits = userData.favFruits.filter(element => element._id != id);
      userData.save();
      res.send(userData);
    }
  })
};

module.exports = { getController, creatController, updateController, deleteController };
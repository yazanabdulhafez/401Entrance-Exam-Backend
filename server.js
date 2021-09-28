'use strict';

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const indexController = require("./controllers/index.controller");
const apiDataController = require("./controllers/apiData.controller");
const { getController, creatController, updateController, deleteController } = require("./controllers/CRUD.controller");
const { seedUsersData } = require("./models/user.model");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to the DB')).catch(error => console.log(error.message));

// seedUsersData();
app.get('/', indexController);
app.get('/Fruits', apiDataController);

app.get('/FavFruits', getController);
app.post('/FavFruits', creatController);
app.put('/FavFruits/:id', updateController);
app.delete('/FavFruits/:id', deleteController);

app.listen(PORT, () => console.log(`the server is running on port ${PORT}`));
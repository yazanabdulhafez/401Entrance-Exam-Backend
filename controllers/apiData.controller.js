'use strict';

const axios = require("axios");

const apiDataController = (req, res) => {
  const apiUrl = 'https://fruit-api-301.herokuapp.com/getFruit';
  axios.get(apiUrl).then(response => res.send(response.data))
    .catch(error => res.send(error.message));

};

module.exports = apiDataController;
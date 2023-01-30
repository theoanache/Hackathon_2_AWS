const cityModel = require("../models/cityModel");

const cityController = {
  getAllCities: (req, res, next) => {
    cityModel
      .findAll()
      .then(([cities]) => res.status(200).send(cities))
      .catch((err) => next(err));
  },
  getCityById: (req, res, next) => {
    const { id } = req.params;
    cityModel
      .findOne(id)
      .then(([city]) => res.status(200).send(city))
      .catch((err) => next(err));
  },
};

module.exports = cityController;

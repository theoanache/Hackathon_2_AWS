/* eslint-disable consistent-return */
/* eslint-disable camelcase */
const vehicleModel = require("../models/vehicleModel");

const vehicleController = {
  getAllVehicles: (req, res, next) => {
    vehicleModel
      .findAll()
      .then(([vehicle]) => res.status(200).send(vehicle))
      .catch((err) => next(err));
  },
  getVehicleById: (req, res, next) => {
    const { id } = req.params;
    vehicleModel
      .findOne(id)
      .then((vehicle) => {
        if (vehicle[0].length === 0) {
          res.status(404).send("this vehicle do not exists anymore");
        } else {
          res.send(vehicle[0]);
        }
      })
      .catch((err) => next(err));
  },

  createVehicle: (req, res, next) => {
    const {
      type,
      model,
      description,
      capacity,
      year,
      mileage,
      fuel,
      gearbox,
      maxspeed,
      wheel,
      price,
      color,
      city_id,
      user_id,
      photo,
      available,
    } = req.body;
    try {
      vehicleModel
        .createVehicle({
          type,
          model,
          description,
          capacity,
          year,
          mileage,
          fuel,
          gearbox,
          maxspeed,
          wheel,
          price,
          color,
          city_id,
          user_id,
          photo,
          available,
        })
        .then(([response]) => {
          console.warn(response);
          return res.status(201).send({
            message: "Vehicle created successfully",
          });
        });
    } catch (err) {
      return next(err);
    }
  },
  deleteVehicle: (req, res, next) => {
    const { id } = req.params;
    vehicleModel
      .deleteVehicle(id)
      .then((response) => {
        if (response[0].affectedRows !== 1) {
          return res.status(404).send(`vehicle ${id} not found`);
        }
        return res.status(200).send(`vehicle ${id} deleted`);
      })
      .catch((err) => next(err));
  },
  updateVehicle: (req, res, next) => {
    const { id } = req.params;
    const payload = req.body;

    vehicleModel
      .updateVehicle(payload, id)
      .then((response) => {
        if (response[0].affectedRows !== 1) {
          return res.status(404).send(`vehicle ${id} not found`);
        }
        return res.status(200).send(`vehicle ${id} updated`);
      })
      .catch((err) => next(err));
  },
};

module.exports = vehicleController;

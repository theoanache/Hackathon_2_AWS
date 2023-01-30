const express = require("express");

const vehicleRouter = express.Router();

const vehicleController = require("../controllers/vehicleController");

vehicleRouter.get("/", vehicleController.getAllVehicles);
vehicleRouter.get("/:id", vehicleController.getVehicleById);
vehicleRouter.post("/createvehicle", vehicleController.createVehicle);
vehicleRouter.delete("/:id", vehicleController.deleteVehicle);
vehicleRouter.put("/:id", vehicleController.updateVehicle);

module.exports = vehicleRouter;

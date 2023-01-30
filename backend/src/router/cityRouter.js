const express = require("express");

const cityRouter = express.Router();

const cityController = require("../controllers/cityController");

cityRouter.get("/", cityController.getAllCities);
cityRouter.get("/:id", cityController.getCityById);

module.exports = cityRouter;

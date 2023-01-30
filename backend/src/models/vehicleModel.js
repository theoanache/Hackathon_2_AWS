const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM vehicle")
    .then((vehicles) => vehicles);
};
const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM vehicle where id = ?", [id])
    .then(([vehicle]) => vehicle);
};

const createVehicle = (payload) => {
  return db
    .promise()
    .query("INSERT INTO vehicle SET ?", [payload])
    .then((vehicle) => vehicle);
};
const deleteVehicle = (id) => {
  return db
    .promise()
    .query("DELETE FROM vehicle WHERE id = ?", [id])
    .then((vehicle) => vehicle);
};
const updateVehicle = (payload, id) => {
  return db
    .promise()
    .query("UPDATE vehicle SET ? WHERE id = ?", [payload, id])
    .then((vehicle) => vehicle);
};

module.exports = {
  findAll,
  findOne,
  createVehicle,
  deleteVehicle,
  updateVehicle,
};

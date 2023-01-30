const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM city")
    .then((cities) => cities);
};
const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM city where id = ?", [id])
    .then(([city]) => city);
};

module.exports = { findAll, findOne };

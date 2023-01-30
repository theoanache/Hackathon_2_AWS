/* eslint-disable camelcase */

const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM admin")
    .then((admins) => admins);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM admin where id = ?", [id])
    .then(([admin]) => admin);
};
const findByEmail = (email) => {
  return db
    .promise()
    .query("SELECT * FROM admin where email = ?", [email])
    .then(([admin]) => admin);
};

const createOne = (payload) => {
  return db
    .promise()
    .query("INSERT INTO admin SET ?", [payload])
    .then((admin) => admin);
};

const deleteOne = (id) => {
  return db
    .promise()
    .query("DELETE FROM admin WHERE id = ?", [id])
    .then(([res]) => res);
};

module.exports = { findAll, findOne, findByEmail, createOne, deleteOne };

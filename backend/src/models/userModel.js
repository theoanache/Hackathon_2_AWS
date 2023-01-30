/* eslint-disable camelcase */

const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM user")
    .then((users) => users);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM user where id = ?", [id])
    .then(([user]) => user);
};
const findByEmail = (email) => {
  return db
    .promise()
    .query("SELECT * FROM user where email = ?", [email])
    .then(([user]) => user);
};

const createOne = (payload) => {
  return db
    .promise()
    .query("INSERT INTO user SET ?", [payload])
    .then((user) => user);
};

const deleteOne = (id) => {
  return db
    .promise()
    .query("DELETE FROM user WHERE id = ?", [id])
    .then(([res]) => res);
};

module.exports = { findAll, findOne, findByEmail, createOne, deleteOne };

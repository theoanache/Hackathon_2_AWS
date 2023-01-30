/* eslint-disable camelcase */
/* eslint-disable consistent-return */

const { validationResult } = require("express-validator");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const adminModel = require("../models/adminModel");

const adminController = {
  getAllAdmins: (req, res, next) => {
    if (req.roleId === 2) {
      adminModel
        .findAll()
        .then((admins) => res.status(200).send(admins))
        .catch((err) => next(err));
    } else {
      return res.status(401).send({ message: "Unauthorized" });
    }
  },
  getAdminById: (req, res, next) => {
    const { id } = req.params;
    adminModel
      .findOne(id)
      .then(([admin]) => res.status(200).send(admin))
      .catch((err) => next(err));
  },

  createAdmin: async (req, res, next) => {
    const errors = validationResult(req);
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await argon2.hash(password);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      adminModel
        .createOne({
          firstname,
          lastname,
          email,
          password: hashedPassword,
        })
        .then(([response]) => {
          console.warn(response);
          return res.status(201).send({
            message: "Admin created successfully",
            email,
            firstname,
            lastname,
          });
        });
    } catch (err) {
      return next(err);
    }
  },

  login: (req, res, next) => {
    const { email, password } = req.body;
    adminModel
      .findByEmail(email)
      .then(async ([admin]) => {
        if (!admin) {
          res.status(401).send({ message: "Invalid email or password" });
        } else {
          const {
            id,
            role_id,
            email: adminEmail,
            firstname,
            lastname,
            password: hashedPassword,
          } = admin;

          if (await argon2.verify(hashedPassword, password)) {
            const token = jwt.sign(
              { id, adminEmail, firstname, lastname, role_id },
              process.env.JWT_AUTH_SECRET,
              { expiresIn: "1h" }
            );
            res
              .cookie("acces_token", token, { httpOnly: true, secure: true })
              .status(200)
              .send({
                message: "Admin logged in successfully",
                id,
                email,
                firstname,
                lastname,
                role_id,
              });
          } else {
            res.status(404).send({ message: "Invalid email or password" });
          }
        }
      })
      .catch((err) => next(err));
  },

  deleteAdmin: (req, res, next) => {
    const { id } = req.params;
    adminModel
      .deleteOne(id)
      .then((response) => {
        if (response.affectedRows !== 1) {
          return res.status(404).send(`admin ${id} not found`);
        }
        return res.status(200).send(`admin ${id} deleted`);
      })
      .catch((err) => next(err));
  },
};

module.exports = adminController;

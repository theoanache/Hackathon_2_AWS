const express = require("express");

const adminRouter = express.Router();
const authentication = require("../middlewares/authentication");
const adminController = require("../controllers/adminController");
const checkEmail = require("../middlewares/checkEmail");
const emailValidator = require("../middlewares/Validator");

adminRouter.post("/login", adminController.login);
adminRouter.get("/", authentication, adminController.getAllAdmins);
adminRouter.get("/:id", adminController.getAdminById);
adminRouter.post(
  "/createprofile",
  checkEmail,
  emailValidator,
  adminController.createAdmin
);

module.exports = adminRouter;

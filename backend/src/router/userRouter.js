const express = require("express");

const userRouter = express.Router();
// const authentication = require("../middlewares/authentication");
const userController = require("../controllers/userController");
const checkEmail = require("../middlewares/checkEmail");
const emailValidator = require("../middlewares/Validator");

userRouter.post("/login", userController.login);
userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post(
  "/createprofile",
  checkEmail,
  emailValidator,
  userController.createUser
);

module.exports = userRouter;

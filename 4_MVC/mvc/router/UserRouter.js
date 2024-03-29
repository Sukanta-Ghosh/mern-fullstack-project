const express = require("express");
const { createUser, getAllUser } = require("../controller/UserController");

// Define Router
const UserRouter = express.Router();

// Create user
UserRouter.post(createUser).get(getAllUser);

module.exports = UserRouter;

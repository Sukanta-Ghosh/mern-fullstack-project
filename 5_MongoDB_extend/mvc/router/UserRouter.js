const express = require("express");
const userModel = require("../model/UserModel");
const {
  createResourceFactory,
  getAllResourceFactory,
  getResourceByIdFactory,
  deleteResourceByIdFactory,
  updateResourceByIdFactory,
} = require("../controller/utils");

const UserRouter = express.Router();

/* User Handler methods */
const createUser = createResourceFactory(userModel);
const getAllUser = getAllResourceFactory(userModel);
const updateUserById = updateResourceByIdFactory(userModel);
const getUserById = getResourceByIdFactory(userModel);
const deleteUserById = deleteResourceByIdFactory(userModel);

/** Create user **/
UserRouter.route("/").post(createUser).get(getAllUser);

UserRouter.route("/:id")
  .get(getUserById)
  .delete(deleteUserById)
  .patch(updateUserById);

module.exports = UserRouter;

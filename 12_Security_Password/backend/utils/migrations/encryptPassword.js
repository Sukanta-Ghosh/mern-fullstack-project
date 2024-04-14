const UserModel = require("../../model/UserModel");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// it adds all the enviornment variables to processe.env
dotenv.config({ path: path.join(__dirname, "../", "../", ".env") });
const { MONGODB_URL } = process.env;

/**  connection to the DB **/
function encryptPasswordHelper(Model) {
  {
    mongoose
      .connect(MONGODB_URL)
      .then(async () => {
        console.log("connected to the DB");

        // insert all the  entries
        const allUser = await Model.find();
        for (let i = 0; i < allUser.length; i++) {
          let user = allUser[i];
          user.password = await bcrypt.hash(user.password, 10);
          // validate before false
          await user.save({ validateBeforeSave: false });
        }
        // console.log("Alluser", allUser)
      })
      .then(() => {
        console.log("inserted all the entries");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        mongoose.disconnect();
        console.log("disconect from   DB");
      });
  }
}

encryptPasswordHelper(UserModel);

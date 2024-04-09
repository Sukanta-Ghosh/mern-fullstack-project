const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const ProductRouter = require("./router/ProductRouter");
const UserRouter = require("./router/UserRouter");

// it adds all the enviornment variables to processe.env
dotenv.config();
const { DB_USER, DB_PASSWORD, LOCAL_PORT, MONGODB_URL } = process.env;

/* Connection with the DB */
mongoose
  .connect(MONGODB_URL)
  .then(function (connection) {
    // console.log(connection);
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

/* Create a server */
const app = express();
// any request has something in it's body -> add it to req.body
app.use(express.json());

/* Router Defination */
const appRouter = express.Router();
app.use("/api/v1", appRouter);

appRouter.use("/product", ProductRouter);
appRouter.use("/user", UserRouter);

/* Eastablished connection with server */
const PORT = process.env.PORT || LOCAL_PORT;
app.listen(PORT, function () {
  console.log("server is running at port 3000");
});
/****
 * it is cross platform -> web -> new html
 * android -> rarely update there app -> api ->
 * */

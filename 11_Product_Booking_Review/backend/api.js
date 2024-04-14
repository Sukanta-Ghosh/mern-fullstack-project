const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const BookingRouter = require("./router/BookingRouter");
const ProductRouter = require("./router/ProductRouter");
const UserRouter = require("./router/UserRouter");
const AuthRouter = require("./router/AuthRouter");
const ReviewRouter = require("./router/ReviewRouter");

// it adds all the enviornment variables to processe.env
dotenv.config();
const { MONGODB_URL, LOCAL_PORT } = process.env;

// connection with the DB
mongoose
  .connect(MONGODB_URL)
  .then(function (connection) {
    // console.log(connection);
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
//********************** */

// create a server
const app = express();
// any request has something in it's body -> add it to req.body
// helmet will remove all hader details
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

/** Define Routers */
const appRouter = express.Router();
app.use("/api/v1", appRouter);

appRouter.use("/product", ProductRouter);

appRouter.use("/user", UserRouter);

appRouter.use("/auth", AuthRouter);

appRouter.use("/booking", BookingRouter);

appRouter.use("/review", ReviewRouter);

/*********************************/
const PORT = process.env.PORT || LOCAL_PORT;
app.listen(PORT, function () {
  console.log(`server is running at port ${PORT}`);
});

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const promisify = require("util").promisify;
const UserModel = require("./model/UserModel");

/* :: API  */
// including env variables
dotenv.config();
const { DB_PASSWORD, DB_USER, LOCAL_PORT, DB_URL } = process.env;

/********************* Connection to our DB *******************************/
// connection with the DB
//const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.drcvhxp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
  .connect(DB_URL)
  .then(function (connection) {
    // console.log(connection);
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

/* :: Controller <> MVC */
// converted callback based asynchronous function to promise based function
const promisifiedJWTSign = promisify(jwt.sign);
const promisifiedJWTVerify = promisify(jwt.verify);

/****************** handler functions ***************/
const signupController = async function (req, res) {
  try {
    //Note: Cover in module 8
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
      status: "success",
    });
  }
};

const loginController = async function (req, res) {
  try {
    /**** Note: Cover in module 8
     * 1. check if email is present or not
     *  2. -> if not present -> send a response to the user(email or password is incorrect)
     *  3. -> if present -> check password
     *  4a-> if password is incorrect -> send a response to the user(email or password is incorrect)
     * 4. -> if password is correct -> create a token and send it to the user(jwt.sign)
     * 5. put that token in the cookie
     * 6. send the response to the client
     * ***/
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "failure",
      message: err.message,
    });
  }
};

const protectRouteMiddleWare = async function (req, res, next) {
  try {
    /* Note: Cover in module 8
    check for the cookie -> jwt or not
    if not present -> send a response to the user(you need to be logged in)
    if present -> verify the token(jwt.verify)
    if token is not valid -> invalid token(login again)
    if token is value  -> next() */
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

const getUserData = async function (req, res) {
  try {
    const id = req.userId;
    const user = await UserModel.findById(id);

    res.status(200).json({
      message: "user data retrieved  successfully",
      user: user,
    });
  } catch (err) {
    res.status(200).json({
      message: err.message,
    });
  }
};

/* :: Router <> MVC */
/*********** Routes ***************/
const app = express();
app.use(express.json()); //to get the data in req.body

/****** To get the cookie in req.cookies **/
app.use(cookieParser());

// signup -> create a user
app.post("/signup", signupController);

app.post("/login", loginController);

app.get("/allowIfLoggedIn", protectRouteMiddleWare, getUserData);

// 404 route not found
app.use(function cb(req, res) {
  // console.log("");
  // response
  res.status(404).json({
    status: "failure",
    message: " route not found",
  });
});

// server -> run on a port
app.listen(LOCAL_PORT, function () {
  console.log(` server is listening to port ${LOCAL_PORT}`);
});

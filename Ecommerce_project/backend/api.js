const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// it adds all the enviornment variables to processe.env
dotenv.config();
const { DB_USER, DB_PASSWORD, LOCAL_PORT } = process.env;
// connection with the DB
const dbURL =
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.drcvhxp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(dbURL)
    .then(function (connection) {
        // console.log(connection);
        console.log("connected to DB")
    }).catch(err => { console.log(err) });
//********************** */ 


// create a server
const app = express();
// any request has something in it's body -> add it to req.body
app.use(express.json());

const appRouter = express.Router();
app.use("/api/v1", appRouter);

/****post request -> /product**/
const ProductRouter = require("./router/ProductRouter");
appRouter.use("/product", ProductRouter);

const UserRouter = require("./router/UserRouter");
appRouter.use("/user", UserRouter);

const AuthRouter = require("./router/AuthRouter");
appRouter.use("/auth", AuthRouter);


/************routes***************/
// signup -> create a user


/***
 * should only be allowed to be accessed by admin
 * 
 * **/

/*************product*********/
/*********************************/
const PORT = process.env.PORT || LOCAL_PORT;
app.listen(PORT, function () {
    console.log("server is running at port 3000");
})
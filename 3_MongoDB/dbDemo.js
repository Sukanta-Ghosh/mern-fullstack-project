const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const ProductModel = require("./ProductModel");

// it adds all the enviornment variables to processe.env
dotenv.config();
const { DB_USER, DB_PASSWORD, LOCAL_PORT, MONGODB_URL } = process.env;

// Connection with the DB
const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.kyv7pig.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(MONGODB_URL)
  .then(function (connection) {
    // console.log(connection);
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

// create a server
const app = express();
// any request has something in it's body -> add it to req.body
app.use(express.json());

// hanlder method
async function createProduct(req, res) {
  try {
    const productDetails = req.body;
    // adding the product to mongodb
    const product = await ProductModel.create(productDetails);
    res.status(201).json({
      status: "successfull",
      message: `added  the product `,
      product: product,
    });
  } catch (err) {
    res.status(502).json({
      status: "failure",
      message: err.message,
    });
  }
}

async function getAllProducts(req, res) {
  try {
    /* find():
    -> if you don't pass anything -> return you the whole collection
    -> if want to filter -> parameter -> an object */
    const listOfProduct = await ProductModel.find();
    res.status(200).json({
      status: "successfull",
      message: `list of the product `,
      ProductList: listOfProduct,
    });
  } catch (err) {
    res.status(404).json({
      status: "failure",
      message: err.message,
    });
  }
}

async function getproductById(req, res) {
  try {
    const id = req.params.id;
    const product = await ProductModel.findById(id);
    if (product) {
      res.status(200).json({
        status: "successfull",
        message: `got the product `,
        product: product,
      });
    } else {
      throw new Error("Product not found");
    }
  } catch (err) {
    res.status(404).json({
      status: "failure",
      message: err.message,
    });
  }
}

/****create product**/
app.post("/api/product", createProduct);
/******get all the products****/
app.get("/api/product", getAllProducts);
/*****get a product by it's ****/
app.get("/api/product/:id/", getproductById);

/***
 * delete a product
 * update a product
 * */

/*********************************/
const PORT = process.env.PORT || LOCAL_PORT;
app.listen(PORT, function () {
  console.log("server is running at port 3000");
});

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const ProductModel = require("./ProductModel");
const UserModel = require("./UserModel");

/* Enviornment variables */
dotenv.config();
const { DB_USER, DB_PASSWORD, LOCAL_PORT } = process.env;

/* Connection with the DB */
const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.kyv7pig.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(dbURL)
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

/* Product Handler Methods */
async function createProduct(req, res) {
  try {
    const productDetails = req.body;
    // adding thr product to mongodb
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
    // -> if you don't pass anything -> return you the whole collection
    // -> if want to filter -> parameter -> an object
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

async function deleteProductById(req, res) {
  try {
    const id = req.params.id;
    const product = await ProductModel.findByIdAndDelete(id);
    if (product) {
      res.status(200).json({
        status: "successfull",
        message: `product is deleted`,
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
async function updateProductById(req, res) {
  try {
    /***
     * 1. you will need -> id
     * 2. you have pass the keys that they want to update
     * **/
    const id = req.params.id;
    const toUpdateObject = req.body;
    /**
     * some sanitation
     * *  should not be any keys that are not following our schema, _id
     * **/
    const product = await ProductModel.findByIdAndUpdate(id, toUpdateObject, {
      new: true,
    });
    if (product) {
      res.status(200).json({
        status: "successfull",
        message: `product was updated`,
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

/* User Handler Methods */
async function createUser(req, res) {
  try {
    const userDetails = req.body;
    // adding thr product to mongodb
    const user = await UserModel.create(userDetails);
    res.status(201).json({
      status: "successfull",
      message: `added  the product `,
      product: user,
    });
  } catch (err) {
    res.status(502).json({
      status: "failure",
      message: err.message,
    });
  }
}
async function getAllUser(req, res) {
  try {
    // -> if you don't pass anything -> return you the whole collection
    // -> if want to filter -> parameter -> an object
    const listOfUser = await UserModel.find();
    res.status(200).json({
      status: "successfull",
      message: `list of the user `,
      UserList: listOfUser,
    });
  } catch (err) {
    res.status(404).json({
      status: "failure",
      message: err.message,
    });
  }
}

/* Router Defination */
const appRouter = express.Router();
const productRouter = express.Router();
const userRouter = express.Router();

app.use("/api/v1", appRouter);

// post request -> /product
// TODO: app.get is working, router is not working
//app.get("/api/v1/product", getAllProducts);

appRouter.use("/product", productRouter);
appRouter.use("/user", userRouter);

/* Server request on Products */

//Fetch Product
productRouter.route("/").get(getAllProducts);

// Create products
productRouter.route("/").post(createProduct).get(getAllProducts);
//get a product by it's id
productRouter
  .route("/:id")
  .get(getproductById)
  .delete(deleteProductById)
  .patch(updateProductById);

/* Server request on Users */
// Create user
userRouter.route("/").post(createUser).get(getAllUser);

/* Eastablished connection with server */
const PORT = process.env.PORT || LOCAL_PORT;
app.listen(PORT, function () {
  console.log("server is running at port 3000");
});
/****
 * it is cross platform -> web -> new html
 * android -> rarely update there app -> api ->
 * */

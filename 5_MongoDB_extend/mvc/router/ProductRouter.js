const express = require("express");
const productModel = require("../model/ProductModel");
const {
  createResourceFactory,
  getAllResourceFactory,
  getResourceByIdFactory,
  deleteResourceByIdFactory,
  updateResourceByIdFactory,
} = require("../controller/utils");

const ProductRouter = express.Router();

/* Product handler methods */
const createProduct = createResourceFactory(productModel);
const getAllProducts = getAllResourceFactory(productModel);
const getproductById = getResourceByIdFactory(productModel);
const deleteProductById = deleteResourceByIdFactory(productModel);
const updateProductById = updateResourceByIdFactory(productModel);

/****create product**/
ProductRouter.route("/").post(createProduct).get(getAllProducts);

/*****get a product by it's ****/
ProductRouter.route("/:id")
  .get(getproductById)
  .delete(deleteProductById)
  .patch(updateProductById);

module.exports = ProductRouter;

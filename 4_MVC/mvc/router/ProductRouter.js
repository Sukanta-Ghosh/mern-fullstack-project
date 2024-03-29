const express = require("express");
const {
  createProduct,
  getAllProducts,
  getproductById,
  deleteProductById,
  updateProductById,
} = require("../controller/ProductController");

/* Define Router */
const ProductRouter = express.Router();

//Fetch product
ProductRouter.get(getAllProducts);

//Create product
ProductRouter.post(createProduct).get(getAllProducts);

// Get a product by it's id
ProductRouter.route("/:id")
  .get(getproductById)
  .delete(deleteProductById)
  .patch(updateProductById);

module.exports = ProductRouter;

const ProductModel = require("../model/ProductModel");
const {
  createResourceFactory,
  getAllResourceFactory,
  getResourceByIdFactory,
  deleteResourceByIdFactory,
  updateResourceByIdFactory,
} = require("../utils/resourceFactory");

const createProduct = createResourceFactory(ProductModel);
const getAllProducts = getAllResourceFactory(ProductModel);
const getproductById = getResourceByIdFactory(ProductModel);
const deleteProductById = deleteResourceByIdFactory(ProductModel);
const updateProductById = updateResourceByIdFactory(ProductModel);

module.exports = {
  createProduct,
  getAllProducts,
  getproductById,
  deleteProductById,
  updateProductById,
};

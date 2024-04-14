const ProductModel = require("../model/ProductModel");
const ReviewModel = require("../model/ReviewModel");

async function createReview(req, res) {
  // check for login
  // TODO: check whether the user has bought that product or not -> if true
  try {
    // form review object
    const { rating, review_title, review_desc, product_id } = req.body;
    // userId is coming from protectRouteMiddleWare
    const userId = req.userId;

    //form the object to work with schema
    let reviewObj = {
      rating,
      review_title,
      review_desc,
      product: product_id,
      user: userId,
    };

    // add the review
    // TODO: update the average ratings
    const review = await ReviewModel.create(reviewObj);

    // find the product
    const product = await ProductModel.findById(product_id);

    // add reviews to product model
    product.reviews.push(review["_id"]);
    await product.save();

    // send response
    res.status(200).json({
      status: "success",
      review,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "server error",
      err: err.message,
    });
  }
}

// TODO:
async function getAllReviewsOfAPRoduct(req, res) {}
async function getAllReviews(req, res) {}

module.exports = {
  createReview,
  getAllReviewsOfAPRoduct,
  getAllReviews,
};

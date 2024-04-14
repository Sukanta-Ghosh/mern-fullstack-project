const express = require("express");
const { protectRouteMiddleWare } = require("../controller/AuthController");
const {
  createReview,
  getAllReviewsOfAPRoduct,
  getAllReviews,
} = require("../controller/ReviewController");

const ReviewRouter = express.Router();

ReviewRouter.route("/").post(protectRouteMiddleWare, createReview);

// TODO: Implement Controller method
ReviewRouter.route("/:productId").get(getAllReviewsOfAPRoduct);
ReviewRouter.route("/allReviews").get(getAllReviews);

module.exports = ReviewRouter;

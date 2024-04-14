const express = require("express");
const { protectRouteMiddleWare } = require("../controller/AuthController");
const {
  initialBookingController,
  paymentVerificationcontroller,
  allBookings,
  getAllorder,
} = require("../controller/BookingController");

// Define Routers
const BookingRouter = express.Router();

BookingRouter.post(
  "/checkout",
  protectRouteMiddleWare,
  initialBookingController
);

BookingRouter.post("/verification", paymentVerificationcontroller);

BookingRouter.get("/", allBookings);

BookingRouter.get("/orders", protectRouteMiddleWare, getAllorder);

module.exports = BookingRouter;

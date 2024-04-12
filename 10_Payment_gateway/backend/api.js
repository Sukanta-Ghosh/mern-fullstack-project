const express = require("express");
const dotenv = require("dotenv");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const ShortUniqueId = require("short-unique-id");
const cors = require("cors");

/* :: API  */
dotenv.config({ path: "../.env" });
const { RAZORPAY_PUBLIC_KEY, RAZORPAY_PRIVATE_KEY, WEBHOOK_SECRET } =
  process.env;

const app = express();
app.use(express.json());
app.use(cors());

/* :: Controller <> MVC */
const uid = new ShortUniqueId({ length: 10 });

// on server to start the razorpay integartaion -> instatntiate
const razorpayInstance = new Razorpay({
  key_id: RAZORPAY_PUBLIC_KEY,
  key_secret: RAZORPAY_PRIVATE_KEY,
});

const paymentCheckout = async (req, res) => {
  try {
    const amount = 500;
    const currency = "INR";
    const receiept = `rec_${uid.rnd()}`;
    const payment_capture = 1;

    const options = {
      amount: amount * 100,
      currency: currency,
      receipt: receiept,
      payment_capture: payment_capture,
    };

    // order creation
    const orderObject = await razorpayInstance.orders.create(options);

    res.status(200).json({
      status: "success",
      message: orderObject,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const paymentVerify = async (req, res) => {
  try {
    // on  payment gateway-> req.body + webhook -> hash
    const razorPaySign = req.headers["x-razorpay-signature"];

    // this object -> sha256+webhook_secret
    const shasum = crypto.createHmac("sha256", WEBHOOK_SECRET);
    // whatevere data is send by you razorpay
    shasum.update(JSON.stringify(req.body));
    const freshSignature = shasum.digest("hex"); // [webhook, req.body]

    console.log("verified payment");

    if (freshSignature === razorPaySign) {
      console.log("Payment is verified");
      console.log(req.body);
      const orderId = req.body.payload.payment.entity.order_id;

      res.status(200).json({ message: "OK" });
    } else {
      // there some tempering
      res.status(403).json({ message: "Invalid" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* :: Router <> MVC */
app.get("/", (req, res) => {
  res.send("Hello World");
});

// bookings route
app.post("/checkout", paymentCheckout);
// you haven't verified the payment
app.post("/verify", paymentVerify);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

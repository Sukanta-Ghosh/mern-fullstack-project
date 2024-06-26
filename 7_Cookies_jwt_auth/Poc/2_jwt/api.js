const express = require("express");
const cookieParser = require("cookie-parser");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cookieParser());

/* :: Controller <> MVC */
// converted callback based asynchronous function to promise based function
const promisifiedJWTSign = promisify(jwt.sign);
const promisifiedJWTVerify = promisify(jwt.verify);
const payload = "1234";
const secretKey = "i am a secret";

async function signInToken(req, res) {
  try {
    // token creation
    const authToken = await promisifiedJWTSign({ data: payload }, secretKey, {
      algorithm: "HS256",
    });
    // put it into your cookie
    res.cookie("jwt", authToken, { maxAge: 90000000, httpOnly: true });

    // send the response
    res.status(200).json({
      message: "signed the jwt and sending it in the cookie",
      authToken,
    });
  } catch (err) {
    console.log("err", err);
    res.status(400).json({
      message: err.message,
      status: "failure",
    });
  }
}

async function verifyToken(req, res) {
  try {
    // getting token from cookies
    const jwtToken = req.cookies.jwt;
    // decryption
    const decryptedToken = await promisifiedJWTVerify(jwtToken, secretKey);

    res.status(200).json({
      message: `token is decoded`,
      decryptedToken,
    });
  } catch (err) {
    console.log("err", err);
    res.status(400).json({
      message: err.message,
      status: "failure",
    });
  }
}

/* :: Router <> MVC */
/****************** Create the token *********************/
app.get("/sign", signInToken);

/************ Verifying those tokens *******************/
app.get("/verify", verifyToken);

// server -> run on a port
app.listen(3000, function () {
  console.log(` server is listening to port 3000`);
});

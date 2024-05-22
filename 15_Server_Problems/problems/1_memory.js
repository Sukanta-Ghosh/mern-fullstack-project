/*****
 * read a file -> needs to be added to your ram / memory
 *  Problems-1
 *      * file sizes can be huge
 *      * ram size is usually limited
 * ***/
const express = require("express");
const fs = require("fs");
const http = require("http");
const path = require("path");

const server = http.createServer();

const app = express();

// big.file size is more than 500 mb suppose
/* 1. Don't use readFileSync as it will block call stack 
2. */
app.get("/", function (req, res) {
  const streamSource = path.join(__dirname, "big.file");
  const readStream = fs.createReadStream(streamSource);

  // as soon as you read -> send it into response
  readStream.pipe(res);
});

app.listen(3000, () => {
  console.log("server is listenig at port 3000");
});

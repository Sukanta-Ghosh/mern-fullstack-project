// Polyfill of promisify -> promisify
// importing your http modules
const http = require("http");
// creaated server
const server = http.createServer();

// now whenever a request is send to this server -> your callback will be called
server.on("request", function (req, res) {
  console.log("url", req.url);
  console.log("method", req.method);

  console.log("recived the request");
  res.end("Thanks for sending the request");
});
// your server is listening on port 3000;
server.listen(3000, () => {
  console.log("My server is running at port 3000");
});

/**
 * if to run multiple server with different port -> deployment
 * */

// GET - api/users
// POST - api/users
// DELETE - api / users /:id should we be calling this as 3 -> implement it on your own your own

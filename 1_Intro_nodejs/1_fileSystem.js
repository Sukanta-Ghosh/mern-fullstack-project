const fs = require("fs");
/**
 * files and directories
 * **/
// it will write / overwrite the content in the file
// fs.writeFileSync("file.txt","I wrote some content in nodejs");
// console.log("writing stopped");
// fs.writeFileSync("file.txt","I overwrote");
// console.log("overwitten ");
// console.log("appended ");
// // append the content
// fs.appendFileSync("file.txt"," I have appended some content");
// // data -> binary -> hexadecimal->buffer
// const content=fs.readFileSync("file.txt","utf-8");
// console.log(content);

// console.log("creating directory");
// fs.mkdirSync("nodeDirec");

/***
 * sync in every method signifies -> synchronous behaviour
 * */

/***
 * asynchrnous  version of function -> that is given by nodejs , will always have first param as error
 * */
// console.log("Before");

// fs.readFile("file.txt", "utf-8", function (err, data) {
//     if (err) {
//         console.log("err is", err.message)
//     } else {
//         console.log(data);
//     }
// })

// console.log("After");

/**
 * another way of using async function -> promises
 * **/

console.log("Before");
const filePromise = fs.promises.readFile("file.txt", "utf-8");
filePromise.then((data) => {
  console.log(data);
});

console.log("After");

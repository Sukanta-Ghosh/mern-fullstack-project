const path = require("path");

/**********************global variables available in nodejs*********************************/
// respersent  the whole nodejs
// console.log(global);
// it will represent currently running nodejs process
// console.log(process);
// give  you current directory were code is being is executed
// console.log("dirname", __dirname);
// gives you current file path name which is responsible for excecuting your nodejs file
// console.log("filename", __filename);
/**********************global variables available in nodejs*********************************/

// if have path -> etxension of a file

// const fileExt=path.extname(__filename);
// const fileName=path.basename(__filename);
// const directoryName=path.dirname(__dirname);

// console.log("fileExt:   ",fileExt);
// console.log("fileName:   ", fileName);
// console.log("directoryName:   ", directoryName);

/**
 * lecture-2 to 16 at the main folder level
 * fs.mkdirSync
 * **/
// const fs = require("fs");
// console.log("dirname",__dirname)
// const directoryPath = path.dirname(__dirname);
// console.log(directoryPath);

// for (let idx = 2; idx <= 16; idx++) {
//     let pathtOfNewDir = path.join(directoryPath, `lecture_${idx}`);
//     fs.mkdirSync(pathtOfNewDir);
//     console.log(pathtOfNewDir+ "is created");
// }

var fs = require('fs');

var elements = [1, 2, 3, 4, 5];

console.log("=== Method forEach ===");
elements.forEach((e, i, a) => {
  console.log(e, i);
});

/*
  Or
  elements.forEach((e, i) => console.log(e, i));
*/

console.log("=== Callback of a function in Node.js ===");
fs.readdir(__dirname, (err, files) => {
  console.log(err, files);
});

/*
  Or
  fs.readdir(__dirname, (err, files) => console.log(err, files));
*/

//core modules -> that don't have to be installed using npm, they came with installation of node JS.
const path = require("path");
//dirname accepts a file path and returns the directory name of that path
console.log(path.dirname("www/test.js"));
//__dirname is a local variable which returns the directory name of the directory containing the source code file
console.log(__dirname);
//path.join() -> joins the directories with '/'.
const dirUploads = path.join(__dirname, "www", "files", "uploads");
console.log(dirUploads);

const util = require("util");

util.log("Timestampled message!");

//We can destructure the node js modules .
const { log } = require("util");

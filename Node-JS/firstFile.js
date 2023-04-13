console.log("Hello NodeJS");
// console.log(globalThis);

console.log(__dirname);

/*
require() -> global function is used to import external modules
which are either shipped with NodeJS, installed using npm
or modules that we create ourselves.
*/
/**
 Node uses two core modules for managing module dependencies:

The require module, which appears to be available on the global scope — no need to require('require').
The module, which also appears to be available on the global scope — no need to require('module').
 */
/* path module ships with Node JS. The Path module provides a way of working with directories and file paths.*/

const path = require("path");

//The path.basename() method returns the last portion of a path not the entire path
console.log(`The filename is ${path.basename(__filename)}`);

/*
The process object in Node.js is a global object that can be accessed 
inside any module without requiring it. There are very few global objects or 
properties provided in Node.js and process is one of them. It is an essential
component in the Node.js ecosystem as it provides various information sets about 
the runtime of a program. It gives info about the currently running node process.
*/
console.log(process.pid);
console.log(process.version);
console.log(process.versions.node);
// process.agv is an array which contains everything we type to run the process. node -> filename -> other things
console.log(process.argv);
//node -p "process.argv"

const [, , firstName, lastName] = process.argv;
/*Eg:- Cmd -> node firstFile.js Kritika Arya,  o/p -> You name is Kritika Arya */
console.log(`You name is ${firstName} ${lastName}`);

const grab = (flag) => {
  return process.argv[process.argv.indexOf(flag) + 1];
};

const user = grab("--user");
const greeting = grab("--greeting");

console.log(`${greeting} ${user}`);

let text = "Hi";
console.log(text);
process.stdout.write(text + "\n");

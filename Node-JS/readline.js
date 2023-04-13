// used to ask questions froma terminal user  and collect their answers.
const readline = require("readline");
//createInterface accepts an object that tells readline what stream to use for input and what for output.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//accepts the q's string and a callback method that would execute once the q's has been answered.
rl.question("How do you like Node? ", (answer) => {
  console.log(`Your answer is: ${answer}`);
  process.exit();
});

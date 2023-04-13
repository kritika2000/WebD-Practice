/*
Std. inputs and outputs -> process.stdin, process.stdout -> offer us a way 
to communicate with the process while it's running, these objects allow
us to reda and write data from the terminal.
*/
// stdout implements a write method to write data to the terminal.
//prints HelloWorld in one line.
// process.stdout.write("Hello");
// process.stdout.write("World");

const ques = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];

const ask = (i = 0) => {
  process.stdout.write(`${i + 1}. ${ques[i]}`);
  process.stdout.write(` >> `);
};

ask();

const ans = [];
//process.stdin => listens for the user input. It uses on() function to listen for the event.
process.stdin.on("data", (data) => {
  //The trim() method removes whitespace from both sides of a string.
  //   process.stdout.write(`\n\n ${data.toString().trim()}`);
  ans.push(data.toString().trim());
  if (ans.length < ques.length) ask(ans.length);
  else process.exit();
  //process exits
  //   process.exit();
});
//On process exit, this event will be fired and runs the callback method
process.on("exit", () => {
  const [name, activity, language] = ans;
  console.log(`
    Thank you for your answers.

    Go ${activity} ${name} you can write ${language} code later.
    
    `);
});

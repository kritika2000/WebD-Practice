//setInterval, setTimeout works the same way in node js as they work in browsers.

const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  //   console.log(`Waiting ${currentTime / 1000}`);
  //clears the lastline wrote to the terminal.
  process.stdout.clearLine();
  //Move the cursor to the firstline
  process.stdout.cursorTo(0);
  process.stdout.write(`Waiting ... ${p}%`);
};

console.log(`setting a ${waitTime / 1000} second delay`);
const interval = setInterval(incTime, waitInterval);
const timerFinished = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write("Done Waiting!");
};

setTimeout(timerFinished, waitTime);

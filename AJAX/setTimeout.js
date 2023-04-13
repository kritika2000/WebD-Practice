const ajaxCall = () => {
  console.log("Inside Ajax Call!");
  setTimeout(() => {
    console.log("Inside SetTimeout!");
  }, 2000);
};

const interval = setInterval(ajaxCall, 2000);
console.log("Interval: ", interval);
setTimeout(() => {
  clearInterval(interval);
  console.log("Interval Cleared!");
}, 4000);
console.log("Hello World");

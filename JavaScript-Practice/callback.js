// function callback() {
//   console.log(this);
//   console.log("Callback is running!");
// }
var obj = {
  func: fun,
};
function fun(callback) {
  console.log("Inside Callback!");
  console.log(this);
  callback();
}
var objOuter = {
  outerObj: obj,
};
objOuter.outerObj.func(function () {
  console.log(this);
  console.log("Callback is running!");
});

var x = "hello";
function sample() {
  console.log(this);
}
sample.call(x);

// Variables
// Global variables
c = 20;
//  Function scope, can be redeclared
var d = 30;
// var d = 01;
//  Block scope, can't be redeclared, must be declaared before use
let e;
e = 10;
// error
var x = 2;
var x = 10;
// not allowed(redeclaration)
// let x = 3;
// let e = 90;
console.log(e);
function fun() {
  let a = 5;
  var x = 10;
  var e = 10;
  if (a == 5) {
    var x = 11;
    let b = 10;
    console.log("Inside" + b);
  }
  console.log("Outside" + c);
  console.log(x);
}
{
  c = 20;
}
fun();
console.log("Outside" + c);
console.log(x);

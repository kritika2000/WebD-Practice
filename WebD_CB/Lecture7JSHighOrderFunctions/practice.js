// let obj1 = {
//   a: 10,
//   b: 20,
// };
// let obj2 = Object.create(obj1);
// console.log(obj1);

// var fun = function (a, b) {
//   this.a = a;
//   this.b = b;
//   function func() {}
// };
// let f = new fun(10, 20);

// console.log(fun.prototype);
// console.log(f.__proto__);
// fun.prototype.x = function funcX() {
//   return "Inside function funcX";
// };
// console.log(f.x());

// class c {
//   constructor() {}
//   c1() {
//     return "Inside function c1";
//   }
// }
// console.log(c.prototype);

function fun() {
  console.log(this);
}
// fun();
var obj = fun();
console.log(obj);
fun();
// console.log(x());

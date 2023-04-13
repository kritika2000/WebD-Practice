// this function exp is anonymous.
// but we can name this functions as well but can't call it with the given name.
// functions can be hoisted but functon expressions can't.
const square = function sq(number) {
  return number * number;
};
const x = square(4); // x gets the value 16
console.log(x);

let myFunc;
let num = 0;
if (num === 0) {
  myFunc = function (theObject) {
    // theObject.make = "Toyota";
  };
}
console.log(myFunc);

// error
// sconsole.log(y);
const y = function () {
  var v = 10;
};
// error as v's scope is limited to function only.
// console.log(v);

/* a function defined in the global scope can access all 
variables defined in the global scope.  */
/* A function defined inside another function can also
access all variables defined in its parent function,
and any other variables to which the parent function has access. */

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore(a) {
  //   const num1 = 2;
  //   const num2 = 3;

  function add() {
    // 23 if num1 and num2 are not defined.
    console.log(arguments[0]);
    return name + " scored " + (num1 + num2);
  }

  return add();
}

console.log(getScore(1)); // Returns "Chamakh scored 5"

/* nested functions forms a closure, i.e. they can access arguments and
 variables of the outer function but vice-versa is not true. */
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
const a = addSquares(2, 3); // returns 13

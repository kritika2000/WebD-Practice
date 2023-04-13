/* function parameters default to undefined. However, 
it's often useful to set a 
different default value.  */

function multiply(a, b = 1) {
  return a * b;
}
// for falsy values the function will set to 0 except undefined.
console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5
console.log(multiply(5, undefined)); // 5
console.log(multiply(2, "")); // 0, 'string' (num is set to '' ~ 0)
console.log(multiply(1, null)); // 0, 'object' (num is set to null ~ 0)

// The default argument is evaluated at call time.
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [2], not [1, 2]

// parameters can default to other functions.

function callSomething(thing = something()) {
  return thing;
}
let numberOfTimesCalled = 0;
function something() {
  numberOfTimesCalled += 1;
  return numberOfTimesCalled;
}

console.log(callSomething()); // 1
console.log(callSomething()); // 2

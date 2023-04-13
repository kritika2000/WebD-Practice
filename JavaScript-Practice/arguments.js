function func1(a, b, c) {
  // Arguments is an array-like object, it lack all built in methods of an Array.
  // [Arguments] { '0': 1, '1': 2, '2': 3 }
  //   arguments is accessible only inside functions.
  const arg1 = Array.prototype.slice.call(arguments);
  const arg2 = [].slice.call(arguments);
  const arg3 = [...arguments];

  console.log(arg2, arguments.callee);

  console.log(arguments, arguments[0]);
  // expected output: 1
  //   Each argument can also be set or reassigned:
  arguments[1] = 3;
  console.log(arguments, arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);
/* Coverting arguments object into an array. */
/* 

Normally, calling

var b = a.slice();
will copy the array a into b. However, we can’t do

var a = arguments.slice();
because arguments doesn’t have slice as a method (it’s not a real array).

Array.prototype.slice is the slice function for arrays. .call 
runs this slice function, with the this value set to arguments.

 */

function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 0);
  console.log(args);
  return args.join(separator);
}
console.log(myConcat(", ", "red", "orange", "blue"));

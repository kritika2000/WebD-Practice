/*

Spread syntax (...) allows an iterable such as an array expression
or string to be expanded in places where zero or more arguments 
(for function calls) or elements (for array literals) are expected, 
or an object expression to be expanded in places where zero or more 
key-value pairs (for object literals) are expected.

*/

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

/*
Spread syntax can be used when all elements from an 
object or array need to be included in a list of some kind.
*/

let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];
console.log(numberStore); // [ 0, 1, 2, 12 ]

var str = "abc";
console.log(sum(...str)); //abc

/*
Rest syntax looks exactly like spread syntax. In a way, 
rest syntax is the opposite of spread syntax. Spread syntax "expands"
 an array into its elements, while rest syntax collects multiple elements 
 and "condenses" them into a single element(array).
*/
let array = [1, 2, 3];
let array1 = [...arr]; // like arr.slice()

let array2 = [0, 1, 2];
let array3 = [3, 4, 5];

//  Append all items from arr2 onto arr1
array1 = array1.concat(arr2);

// With spread syntax this becomes:

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
//  arr1 is now [0, 1, 2, 3, 4, 5]

/* ----------- Spread syntax with object literals ---------- */

function funObj(o) {
  // copies the obj to o;
  console.log("Object items: ", o);
}

let obj = { a: 1, b: 2, c: 3 };
funObj({ ...obj });
let objClone = { ...obj }; // pass all key:value pairs from an object

let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

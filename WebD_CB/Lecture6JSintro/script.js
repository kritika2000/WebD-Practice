// alert('in javascript');
console.log('Hello in script.js')
// both double and integers will be taken as numbers
console.log(typeof 133434);
console.log(typeof 234.667);
console.log(typeof 'eggf');
console.log(typeof null);
console.log(typeof true);
// only runtime errors
function fun() {
    return 1;
}
var a = function () {
    return 1;
}
var b = fun();
//function(functions in js can be treated as variables(function datatype))
console.log(typeof fun);
//number(function fun() is called)
console.log(typeof fun());
console.log(typeof a);
console.log(typeof a());
console.log(b);
console.log(a);
console.log(a());
const c = 10;
// c = 11; //Runtime error(dynamically typed language)
let l;
console.log(l);//undefined


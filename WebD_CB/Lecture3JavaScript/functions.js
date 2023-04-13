/*functions with this type of declaration will automatically 
placed on the top of the code at runtime(hoisting) by the interpreter*/
console.log(add(5, 6));/* works fine*/
function add(a, b) {
    return arguments[0] + arguments[1];
}
// console.log(x(7, 8));
// must be called after it is defined
// Function Expression(Not hoisted)
let x = function () {
    return 1;
}
console.log(x());
let y = function (t = add(7, 10), s = x(1, 2)) {
    return t + s;
}
console.log(y());

function hello() {
    // when we create functions an array(arguments) is also created
    console.log('hello' + arguments[0] + arguments[1]);
}
hello(1, 2);
// JavaScript does not convert numeric values to strings
'37' - 7 // 30
'37' + 7 // "377"

console.log(square)    // square is hoisted with an initial value undefined.
console.log(square(5)) // Uncaught TypeError: square is not a function
const square = function (n) {
    return n * n;
}
// Nested Functions
function addsquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
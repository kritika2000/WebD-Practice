/* 
Lambda functions or pure functions:
1. stateless
2.output depends only on the input and nothing else
3. for the same input, output will always be the same

eg: y = f(x) = 2x + 3
*/
let a = 10;
function f(x) {//stateless: value of f(x) doesn't depend on any other variable outside f(x)
    return 2 * x + 3
}
//f(10) -> 23
//it will always be 23

let count = 0
//f2 is not a lambda function as it is depending on another variables outside the function
function f2() {
    count++
    return count
}
//Arrow functions: write functions like f(x) like lambda functions
//binds 'this' where the functions is defined
//these functions are not supposed to be giving outputs based on the value of this
let f1 = (x) => 2 * x + 3// same as function at line 10

let f3 = (x) => {
    //code
    return x + 1;
}
//IIFE: Immediately invoked function expression
// execute the function immediately after it is declared
/*Benefits:

*/
console.log('Inside IIFEs');
(function () {
    console.log('hello');
})();

var a = 10;
function fun() {
    var a = 20;
}
console.log(a)
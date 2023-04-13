let str = "Kritika" // 3 level
let num = Number(4534); // 3 level
let bool = true // 3 level
let arr = [23, 56, 67]; // 3 level
let obj = { // 2 level away from null
    a: 10,
    b: 'Kritika'
}
function fun() {

}
// All are functions(Global)
console.log(typeof String);//function
console.log(String());
console.log(String(123)), String(true);
console.log(typeof Boolean);
console.log(typeof Number);
console.log(typeof Array);
console.log(typeof Object);
console.log(typeof Function);

//In javascript, everything is essentially an object(because everything 
// inherits from an object)
//obj(type of object) also inherits from Object(!= Object function)

/*Boolean(45)
true
Number('465')
465
Number(true)
1
Array(3,5,7,1)
(4) [3, 5, 7, 1]
Object()
{}
Function()
ƒ anonymous(
) {

}
Function('d')
ƒ anonymous(
) {
d
}
let f = Function()
undefined
f()
undefined
*/

/*

typeof fun
'function'
typeof obj
'object'
typeof Object
'function'
typeof arr
'object'
typeof num
'number'
typeof String
'function'
typeof str
'string'
typeof fun
'function'
typeof Function
'function'


*/

console.log(arr.__proto__.__proto__ == obj.__proto__)//true
console.log(Object.prototype);
console.log('===== prototypes ===== ')
// objects inherit from Object.prototype
console.log(obj.__proto__ == Object.prototype); //true
// strings inherit from String.prototype
console.log(str.__proto__ == String.prototype);
// Arrays inherit from Array.prototype
console.log(arr.__proto__ == Array.prototype);
// Functions inherit from Function.prototype
console.log(fun.__proto__ == Function.prototype);
// Numbers inherit from Number.prototype
console.log(num.__proto__ == Number.prototype);
// Boolean inherit from Boolean.prototype
console.log(bool.__proto__ == Boolean.prototype);

/*let x = Object.create(Boolean.prototype);
x.__proto__ == bool.__proto__; //true
but typeof x(Object) != typeof bool(Boolean)*/

let str2 = 'ejhf';
console.log(typeof str.charAt); //function
console.log(str.charAt == str2.charAt)//true => charAt exixts in .__proto__
// of both strings(inheriting from String.prototype)
// will not make a difference
str.charAt = function () {
    return 'hi';
}
console.log(str.charAt(0)); // returns 'K' instead of 'hi' => redefining 
//functions like this is not allowed but defination can be changed in
//String.prototype because both str and str2 are inheriting charAt from this only

Array.prototype.joinOriginal = Array.prototype.join
Array.prototype.join = function () {
    console.log('Join Called On', this);
    return this.joinOriginal(...arguments);;
}

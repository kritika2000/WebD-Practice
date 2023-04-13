let obj1 = {
    a: 10,
    b: 20,
    c: 30
}
console.log(obj1);

// let obj2 = new Object(); // creates empty object
let obj2 = Object.create(obj1); // creates a new object using an existing one as the prototype of the newly created object.
console.log(obj2);
obj2.d = 40;

console.log(obj2);
console.log(obj2.__proto__, obj1 == obj2.__proto__);

obj2.a = 11;

console.log(obj1.a, obj2.a);
console.log(obj2);

let obj3 = Object.create(obj2);
console.log(obj3.__proto__.__proto__, obj3.__proto__, obj3.__proto__.__proto__.a);


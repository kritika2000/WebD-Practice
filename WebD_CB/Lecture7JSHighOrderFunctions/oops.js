console.log(this);
//object keys are strings only
let x = {
    //10 will be taken as string
    10: 45
}
//can access 10 like this but x.10 will throw an error
x['10']; // this syntax works with all keys
let obj = {
    'a': 10, // a == 'a'
    b: 'kritika',
    c: true,
    d: function () {
        // 'this' points to object(obj) now
        console.log(`Inside d \n`, this);
    },
    e: {
        x: 23,
        y: function () {
            console.log(`Inside e \n`, this);
        }
    }
}
console.log(obj);
// 'this' points to object e
console.log(obj.e.y());
let z = obj.d;
console.log(typeof z);
// this points to object obj 
console.log(obj.d());
// points to window
console.log(z());
/*'this' bounds at run time i.e. at run time
interpreter will check if the function is called via an object
if it does then this will point to the object otherwise it will point
to the current global scope
*/

let obj1 = {
    a: 10,
    b: 20,
    c: 30
}
/* object to object inheritance
obj2 has a field __proto__ which points to the object (obj1) from which 
it is inherited.
*/
let obj2 = Object.create(obj1);
console.log(obj2);
//obj2 is empty but still be able to access the properties of obj1
/*
read only time i.e. if properties(same name as obj1) of obj2 changed
then the changes will refelect in obj2
obj.a -> it will try to find a
     -> if not then it will try to find it in obj.__proto__
     -> if not found, it will try to find it in obj2.__proto__.__proto__
     -> it continues until it becomes null
*/
console.log(obj2.__proto__);
console.log
//prints 10
console.log(obj.a);
obj2.p = 'gfk'
obj2.q = 'fknv'

let obj3 = Object.create(obj2);
console.log('Object3', obj3);
console.log('Proto3', obj3.__proto__);
console.log('Proto3', obj3.__proto__.__proto__);//==obj1


let o = {
    a: 10
}
o.b = 20;
console.log(o);
t = 0;//not allowed in strict mode
console.log(t);
k = 0;
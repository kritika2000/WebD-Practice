let arr = ['Apple', 'Mango', 'Guava', 1, 2, 3];//heterogenous arrays
console.log(arr);
console.log(arr.length);
arr.push("Hello!");//push at back
arr.pop();//remove from back
arr.shift();//remove from front
console.log(arr.indexOf(2));



// For loop
for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);

// For Each Loop v1
arr.forEach(printSub);
function printSub(item, index) {
    console.log(item + " at Index " + index);
}
// For Each Loop v2
arr.forEach(function (item, index) {
    console.log(item + " at Index " + index);
});
// For Of loop
for (let val of arr) {
    console.log(val);//prints value
}
// For in loop
for (let index in arr) {
    console.log(index);//prints index
}
console.log(arr.shift());

let a = [1, 2, 3, 4, 5, 6];
console.log(a);
a.slice(3);//original array not changed
console.log(a);
a.splice(4);//remove elements from the array
console.log(a);//original array got chnaged
/*[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4 ]*/
a.splice(0, 4, 10, 11, 12, 13);// 4 is no. of elements
console.log(a);
let x = a.concat(14);// do not make changes to the original array 
console.log(a);
console.log(x);
//  Primitive parameters (such as a number) are passed to functions by value;
// the value is passed to the function, but if the function changes the value 
// of the parameter, this change is not reflected globally or in the calling function.

// If you pass an object (i.e., a non-primitive value, such as Array or 
// a user-defined object) as a parameter and the function changes 
// the object's properties, that change is visible outside the function
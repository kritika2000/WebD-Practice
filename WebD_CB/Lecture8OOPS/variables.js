var a = 10;
a++;
console.log(a);

let b = 20;
b++;
console.log(b);

const c = 30;
c++; //error

const obj = {
    k1: 'asd',
    k2: 10
}
obj.k4 = 123;
console.log(obj.k4);
//reassignment is not possible in const
//but let and const has the scope of brackets only(block)
function alpha() {
    var myvar = 11;//scope of the entire function
    console.log(myvar);//11
    if (true) {
        var myvar = 21;//equivalent to myvar = 21
        console.log(myvar);//21
    }
    console.log(myvar);//21
}
alpha();
var myvar = 23;

// copy by value and by reference

let s = "hello"
function change(s1) {
    s1 = 'World';
}
change(s);
console.log(s);//hello

//js is pass by value always

let arr = Array(1, 2, 3, 4);
//arr contains the reference 

function changeArr(arr1) {// arr's value is passes to arr1 => both are now 
    //pointing to the same array
    arr1[4] = 5;
    arr1[5] = 6;
}
changeArr(arr);
console.log(arr)//[1,2,3,4,5,6]

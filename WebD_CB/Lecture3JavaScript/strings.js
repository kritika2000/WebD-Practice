let p = `kritika`;
let str = `This is ${p} string`;
console.log(str);
// line breaks
let longstr = 'this is \
a very long \
string'
console.log(longstr);
console.log(str.length);
console.log(str.charAt(10));
console.log(str.indexOf('string')); //returns first position (-1 if a string doesn't exists inside str)
console.log(str.lastIndexOf("is"));
console.log(str.slice(2, 10)); // 10 is not inclusive
// node strings.js
//substr can have starting Index as -ve
console.log(1 == '1'); //abstract equality comparison,(true)
// '1' is converted to number first and then they are checked
//Strict equality comparison
console.log(1 === '1');// false
//peculiar cases

console.log(0 == ''); //true, because Number('') = 0
console.log('false' == false);// false, because Number(false) = 0 and Number('false') is NaN
//when one is boolean and other is string both are typrecasted to Number
/*
//typecasting will not happen
'\n' != '\t' != '' == 0(all)
*/
console.log([1, 2] == [1, 2]);// both arrays are diiferent


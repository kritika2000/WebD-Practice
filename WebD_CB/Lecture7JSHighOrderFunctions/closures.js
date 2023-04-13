function outer(a, b) {
    function inner() {
        return a + b;
    }
    return inner();
}
let f = outer(10, 20);
//f = 30
console.log(f);

function outer1(a) {
    function inner(b) {
        //a is accessible here
        return a + b;
    }
    return inner(20);
}
let f1 = outer1(10);
//f1 = 30
console.log('f1', f1);

function outer2(a) {
    function inner(b) {
        return a + b;
    }
    return inner;
}
let f2 = outer2(10);
//function
console.log(typeof f2);
//f2 = 30
console.log('f2', f2(20));

function outer3(a) {
    function inner1(b) {
        return b + 1;
    }
    function inner2(b) {
        return b + 2;
    }
    return inner1(a) + ' ' + inner2(a);
}

let f3 = outer3(10);
console.log('f3', f3);

function outer4(a) {
    function inner1(b) {
        //a == 1, b == 2
        function inner2(c) {
            console.log('a + b + c is:', a + b + c);
            return a + b + c;
        }
        //a == 1, b == 2
        //call inner2 with c == 3
        return inner2(3);//return 1 + 2 + 3 == 6
    }
    //a == 1
    //call inner1 with b == 2
    return inner1(2);
}
let f5 = outer4(1);
console.log(f5);

function outer5(a) {
    function inner1(b) {
        function inner2(c) {
            return a + b + c;
        }
        return inner2(3);
    }
    // inner1(2);
    return inner1;
}

let f6 = outer5(1);
//f6=8
console.log('f6', f6(4));

function outer6(a) {
    function inner1(b) {
        //a == 1, b == 2
        function inner2(c) {
            return a + b + c;
        }
        //a == 1, b == 2
        return inner2;
    }
    // inner1(2);
    //a == 1;
    return inner1;
}
//inner1 is retured here
let f7 = outer6(1);
console.log(f7);
//b == 2
//inner2 is returned here
let f8 = f7(2);
let f9 = f8(3);
f9
console.log('f9', f7(2)(3));


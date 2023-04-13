function outer(arg1) {
    var o = 10;
    console.log();
    console.log(arguments)
    function inner(arg2) {
        var i = 20;
        //this will contain elements of inner only
        arguments //alaways points to the current function
        console.log('Inside inner', arg1, o, arg2, i, arguments);
    }
    return inner;
    //return inner();
}

let x = outer('param1', 11);// data type of x would be function
//x() is same as inner();
//closure means that inner function always has 
// access to the vars and parameters of it's outer functions
//argument array of outer func will not be caputuredby the inner func
x('param2');//inner function will get called;


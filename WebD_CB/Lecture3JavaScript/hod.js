function createGreeter(greeting) {
    function greet(name) {
        console.log(greeting, name);
    }
    return greet('Kritika')
}
let g1 = createGreeter('Good Morning!');
console.log(g1);
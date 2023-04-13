// allows to create objects without classes
// JSON object
var person = {
    name: "Anshu",
    id: 109,
    subjects: ["DSA", "Maths", "Java"],
    print: function () {
        console.log(this.name + " " + this.id);
    }
}
console.log(person.subjects);
// For loop
for (let i = 0; i < person.subjects.length; i++)
    console.log(person.subjects[i]);

// For Each Loop v1
person.subjects.forEach(printSub);
function printSub(item, index) {
    console.log(item + " at Index " + index);
}
// For Each Loop v2
person.subjects.forEach(function (item, index) {
    console.log(item + " at Index " + index);
});
console.log(person.print());

// Creating objects - another way

function Fruit(taste, color) {
    this.taste = taste;
    this.color = color;
}
let mango = new Fruit("sour", "yellow");
var apple = {
    taste: "sweet",
    color: "red"
}

// Creating objects using class keyword
// Class Declaration
class FruitClass {
    constructor(taste, color) {
        this.taste = taste;
        this.color = color;
    }
}
// Class Expression
var fruit = class {
    constructor(taste, color) {
        this.taste = taste;
        this.color = color;
    }
}
let orange = new FruitClass("sweet", "orange");
let kiwi = new fruit("sour", "green");
console.log(orange.taste);
console.log(kiwi.taste);
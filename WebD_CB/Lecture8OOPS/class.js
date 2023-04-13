class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  isAdult() {
    return this.age >= 18;
  }
}

//p inherits from Person
let p1 = new Person("John Doe", 23);
let p2 = new Person("Jenny", 15);
console.log(typeof Person); // function i.e there is no data type class in js

//p1.isAdult == p2.isAdult => p1 and p2 ae inheriting isAdult from same prototype
console.log(Person.prototype);
console.log(typeof p1);
console.log(p1.__proto__ == Person.prototype);
console.log(p1.__proto__.__proto__ == Object.prototype);

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); //mandatory
    this.grade = grade;
  }
}

// Student.prototype.__proto__ == Person.prototype
console.log("Student: ", Student.prototype);
let s1 = new Student("Harry", 18, "A");
let s2 = new Student("Jane", 13, "B");

console.log(s1 == s2); //false
console.log(s1.__proto__ == s2.__proto__); //true
console.log(s1.__proto__ == Student.prototype); //true

//s1.__proto__.__proto__.isAdult
//s1.__proto__.__proto__.__proto__ == Object.prototype

//inheritance chain
//Object.prototype -> Person.prototype -> Student.prototype

//no inheritance between the classes(they are all functions)
//Object -> Person -> Student
console.log(typeof p1);
console.log(Person.prototype.name);

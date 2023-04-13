// function Animal(name, energy) {
//   let animal = {};
//   animal.name = name;
//   animal.energy = energy;

//   animal.eat = function (amount) {
//     console.log(`${this.name} is eating.`);
//     this.energy += amount;
//   };

//   animal.sleep = function (length) {
//     console.log(`${this.name} is sleeping.`);
//     this.energy += length;
//   };

//   animal.play = function (length) {
//     console.log(`${this.name} is playing.`);
//     this.energy -= length;
//   };
//   return animal;
// }
// const leo = Animal("Leo", 7);
// const peter = Animal("Peter", 10);

// console.log(leo);
// peter.eat(15);

function Animal(name, energy) {
  //   let animal = Object.create(Animal.prototype);
  //   animal.name = name;
  //   animal.energy = energy;

  //   return animal;
  this.name = name;
  this.energy = energy;
  const func = function () {
    console.log("Hello!");
  };
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
};

Animal.prototype.name = "Tiger";

const leo = new Animal("Leo", 7);
const snoop = new Animal("Snoop", 10);
console.log(Animal.prototype);
// leo.eat(10);
// snoop.play(5);
// console.log(snoop.eat === leo.eat);
// console.log(typeof Array(1, 2, 3));

function Foo() {
  this.a = 10;
}

var a = Foo(); //returns window object
var b = new Foo();
// console.log(a, b);

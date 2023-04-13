// var car = {
//   make: "Lamborghini",
//   model: "Huracán",
//   name: null,
//   fullName: function () {
//     this.name = this.make + " " + this.model;
//     console.log(this.name);
//     return this.name;
//   },
// };

// var anotherCar = { make: "Ferrari", model: "Italia", name: null };

// anotherCar.name = car.fullName();
// console.log(anotherCar.name);
// console.log(car.fullName.call(anotherCar));

var car = {
  cars: [
    { make: "Lamborghini", model: "Huracán" },
    { make: "Mclaren", model: "720s" },
    { make: "Ferrari", model: "Italia" },
  ],
  fullName: function () {
    const arr = function () {
      console.log(this.cars);
    };
    this.cars.forEach(arr.bind(this));
  },
};
car.fullName();

function Baddie() {
  // Set up the baddies defaults
  this.level = 1;
  this.hitPoints = 100;
  this.name = "Baddie";
}

function Spider() {
  // Executing Baddie with it's context set to Spider
  // because we used `this` it now assigns it's properties
  // level, hitPoints, and name to the Spider instance.
  Baddie.apply(this);
  this.color = "red";
  this.legs = 8;
}

var regularSpider = new Spider();
console.log(regularSpider);

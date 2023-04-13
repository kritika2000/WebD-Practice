var car = {
  make: "Lamborghini",
  model: "Huracán",
  fullName: function () {
    // "this" keyword refers to the object it belongs to i.e. car
    console.log(this.make + " " + this.model);
    console.log(car.make + " " + car.model);
  },
};
car.fullName();

/*
Whenever that function is executed, it gets the this property,
which is a variable with the value of the object that invokes it.
 */

var make = "Mclaren";
var model = "720s";
function fullName() {
  // this points to global object here
  console.log(this.make + " " + this.model);
}

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  // it will refer to the element which raised the event.
  console.log(this);
});

fullName();

console.log(this);

// var obj = {
//   name: "Kritika",
//   age: 22,
//   getAge: () => {
//     console.log(this);
//     return this.age;
//   },
// };

// // obj.getAge();

// var bunny = {
//   name: "Usagi",
//   tasks: ["transform", "eat cake", "blow kisses"],
//   showTasks: function () {
//     this.tasks.forEach(
//       function (task) {
//         console.log(this);
//         console.log(this.name + " wants to " + task);
//       }.bind(this)
//     );
//     console.log("Outer Function: ", this);
//     // var _this = this;
//     var fun = () => {
//       console.log("Inner Function fun: ", this);
//       function fun1() {
//         console.log("Inner Function fun1: ", this);
//       }
//       fun1();
//     };
//     // fun.bind(this)();
//     // var fun = () => {
//     //   console.log("Inner Function: ", this);
//     // };
//     fun();
//   },
// };
// bunny.showTasks();

function example() {
  (this.name = "kritika"), (this.age = "22");
}
example.prototype.dept = "Sales";
let e = new example();
let e1 = new example();
console.log(e, e1);

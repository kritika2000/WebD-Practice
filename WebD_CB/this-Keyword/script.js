// this uses the context of the function in which it is being used.
const fun = function () {
  console.log(this); //this points to the global object
};
var a = 10;
// fun();

const obj = {
  val: 10,
  func1: fun,
  nestedObj: {
    val: 11,
    func1: fun,
  },
};
// obj.func1(); //fun function has the context obj now.
// obj.nestedObj.func1();

// fun.bind(obj)(); //explicit binding

var bunny = {
  name: "Usagi",
  tasks: ["transform", "eat cake", "blow kisses"],
  x: fun,
  showTasks: function () {
    // console.log(this);
    // this.tasks.forEach(function (task) {
    //   //   alert(this.name + " wants to " + task);
    //   console.log(this);
    // });
    // this.x();
    fun.bind(this)(); //this function works as a standalone function if not bound with this
  },
};
// ‘this’, always references the owner of the function it is in
bunny.showTasks();

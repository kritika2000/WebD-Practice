// function getPosts() {
//   console.log("GetPosts Function called!");
// }
// function createPost() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Create function resolved!");
//       setTimeout(() => {
//         console.log("CreatePost function called!");
//       }, 2000);
//     }, 1000);
//   });
// }

// // createPost().then(getPosts)

// let promise = new Promise(function (resolve, reject) {
//   console.log("inside Promise!");
//   let a = 1;
//   let b = 1;

//   if (a == b) resolve("Resolved");
//   else reject();
// });

// promise
//   .then(function (x) {
//     console.log(x);
//   })
//   .then(() => {
//     const pr = createPost();
//     pr.then((res) => console.log(res));
//   })
//   .catch(function () {
//     console.log("Reject is called!");
//     throw new Error("Somethign went wrong!");
//   });

console.log("Started!");

const pr = new Promise((resolve, reject) => {
  console.log("Creating promise!");
  resolve("Promise Resolved!");
  console.log("Hello!");
});
pr.then((res) => console.log(res));
console.log("Ended!");

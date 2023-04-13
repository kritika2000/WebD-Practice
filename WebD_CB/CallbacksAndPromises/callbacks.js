// console.log("Started");

// setTimeout(() => {
//   console.log("Done");
// }, 2000);

// console.log("Waiting...");

// function logSomething(n) {
//   console.log(`Waiting for ${n / 1000} seconds`);
// }

// function WaitForSomtime(n, callback) {
//   console.log("Waiting...");
//   setTimeout(function () {
//     callback(n);
//   }, n);
// }
// console.log("Started!");
// WaitForSomtime(5000, logSomething);
var url = "https://api.github.com/";

var url1 = "https://jsonplaceholder.typicode.com/posts/";

function getGithubUsers(url) {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) resolve(xhr.responseText);
      else reject(xhr.status);
    };
  });
  //   let promise1 = new Promise((resolve, reject) => {
  //     setTimeout(function () {
  //       //   fetch(url1)
  //       //     .then((response) => {
  //       //       return response.json();
  //       //     })
  //       //     .then((response) => resolve(response));

  //       let xhr = new XMLHttpRequest();
  //       xhr.open("GET", url1);
  //       xhr.send();
  //       xhr.onload = function () {
  //         if (xhr.status === 200) resolve(xhr.responseText);
  //         else reject(xhr.status);
  //       };
  //     }, 5000);
  //   });
  return promise;
}

async function displayResponse() {
  let resp = await getGithubUsers(url);
  console.log(resp);
  let resp2 = await getGithubUsers(url1);
  console.log(resp2);
  return [resp, resp2];
}

console.log(displayResponse());
// Promise.all(getGithubUsers(url, url1)).then((resp) => {
//   console.log("All Promises resolved!");
// });
//   .then((resp) => {
//     console.log("Github Response: ", JSON.parse(resp));
//   })
//   .catch((err) => {
//     throw new Error(err);
//     //   console.log(err)
//   });

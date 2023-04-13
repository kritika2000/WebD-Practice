// const githubUser = () => {
//   return new Promise((resolve, reject) => {
//     var xhr = new XMLHttpRequest();
//     xhr.onload = () => {
//       console.log(xhr.responseText);
//       resolve(xhr.responseText);
//       // return xhr.responseText;
//     };
//     xhr.open("GET", "https://api.github.com/users/kritika2000");
//     xhr.send();
//   });
// };

// (async () => {
//   const user = await githubUser();
//   console.log("User: ", user);
// })();
// const promise = githubUser();
// promise.then((res) => console.log(res));
const githubUser = () => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = () => {
      resolve(xhr.responseText);
    };
    xhr.open("GET", "https://api.github.com/users/kritika2000");
    xhr.send();
  });
};

const main = async () => {
  console.log("hi");
  console.log("my name");
  const result = await githubUser();
  console.log(result);
  console.log("jeff!");
};
main();
(async () => {
  const user = await githubUser();
  console.log("User: ", user);
})();

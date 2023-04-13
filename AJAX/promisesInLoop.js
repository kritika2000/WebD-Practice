const getPostsByID = (id) => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = () => {
      //   console.log(xhr.responseText);
      resolve(JSON.parse(xhr.responseText));
    };
    xhr.open("GET", `https://jsonplaceholder.typicode.com/posts/${id}`);
    xhr.send();
  });
};

// const main = async () => {
//   for (let i = 1; i <= 15; i++) {
//     const post = await getPostsByID(i);
//     console.log(post.id);
//   }
// };

// (async () => {
//   const p = await main();
//   console.log("All Posts Loaded...");
// })();

const promise = () => {
  return new Promise((resolve, reject) => {
    // for (let i = 1; i <= 15; i++) {
    const post = getPostsByID(1);
    post.then((res) => {
      console.log(res.id);
      getPostsByID(2).then((res) => {
        console.log(res.id);
        getPostsByID(3);
      });
    });
    // }
  });
};
promise();
// Promise.all([getPostsByID(1), getPostsByID(2), getPostsByID(3)]).then(
//   (result) => {
//     console.log(result);
//   }
// );

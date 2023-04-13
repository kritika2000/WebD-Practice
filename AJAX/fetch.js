function success() {
  console.log(this);
  var data = JSON.parse(this.responseText);
  console.log(data);
  githubUser();
}

function error(err) {
  console.log("Error Occurred :", err);
}

const githubUser = () => {
  var xhr = new XMLHttpRequest();
  xhr.onload = () => {
    console.log(xhr.responseText);
  };
  xhr.onerror = error;
  xhr.open("GET", "https://api.github.com/users/kritika2000");
  xhr.send();
};

const jsonPosts = (githubUser) => {
  var xhr = new XMLHttpRequest();
  xhr.onload = () => {
    console.log(xhr);
    var data = JSON.parse(xhr.responseText);
    console.log(data);
    githubUser();
  };
  xhr.onerror = error;
  xhr.open("GET", " https://jsonplaceholder.typicode.com/posts");
  xhr.send();
};

// jsonPosts(githubUser);

fetch("https://api.github.com/users/kritika2000")
  .then((resp) => {
    console.log(typeof resp);
    return resp.json();
  })
  .then((res) => console.log(res));

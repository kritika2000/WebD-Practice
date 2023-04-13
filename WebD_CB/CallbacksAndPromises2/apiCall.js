let xhr = new XMLHttpRequest();
let xhr2 = new XMLHttpRequest();

let github = document.getElementById('github');
let json = document.getElementById('json');
let btn = document.getElementById('btn');
console.log(github);

github.onclick = function () {
    console.log("XHR Github initialized");
    xhr.open("GET", "https://ws.api.video/", false);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200)
            console.log(xhr.responseText);
        else
            throw new Error('Something went wrong!');
    }
    xhr.send();
}

json.onclick = function () {
    console.log("XHR JSON initialized");
    xhr2.open("GET", "https://jsonplaceholder.typicode.com/posts", false);
    xhr2.onload = function () {
        if (xhr2.readyState == 4 && xhr2.status == 200)
            console.log(xhr2.responseText);
        else
            throw new Error('Something went wrong!');
    }
    xhr2.send();
}
// const request = new XMLHttpRequest();
// request.addEventListener("readystatechange", () => {
//     console.log(request.readystate);
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request.responseText);
//     } else if (request.readyState === 4) {
//         console.log("could not fetch the data");
//     }
// });
// request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
// request.send();
const weather = false
const date = new Promise(function (resolve, reject) {
    if (weather) {
        const dateDetails = {
            name: 'Cubana Restaurant',
            location: '55th Street',
            table: 5
        };

        resolve(dateDetails)
    } else {
        reject(new Error('Bad weather, so no Date'))
    }
});
date
    .then(function (done) {
        // the content from the resolve() is here
        console.log(done);
    })
    .catch(function (error) {
        // the info from the reject() is here
        console.log(error);
    });
const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
console.log(fetchPromise);
fetchPromise.then(response => {
    console.log(response);
});


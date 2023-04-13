console.log('Started');
setTimeout(() => {
    console.log('Waiting....')
}, 1000);
setTimeout(() => {
    console.log("Done!")
}, 2000);

let btn = document.getElementById('btn');
let arr = [];
let count = 0;
const ul = document.createElement('ul');
function showList() {
    setTimeout(() => {
        for (i = 0; i < arr.length; i++) {
            const li = document.createElement('li');
            li.innerHTML = arr[i];
            ul.appendChild(li);
        }
        document.getElementById('list').appendChild(ul);
    }, 1000)
}
btn.onclick = function () {
    count++;
    // showList();
    arr.push(`Button Clicked ${count} times`)
    setTimeout(() => {
        const li = document.createElement('li');
        li.innerHTML = `Button Clicked!`;
        ul.appendChild(li);
        console.log('New item added!');
        showList();
    }, 2000)
}

function getPosts() {
    setTimeout(() => {
        console.log('GetPosts Function called!');
    }, 5000)
}
function createPost(callback) {
    setTimeout(() => {
        callback();
        setTimeout(() => {
            console.log("CreatePost function called!");
        }, 2000)
    }, 0)
}
createPost(getPosts);

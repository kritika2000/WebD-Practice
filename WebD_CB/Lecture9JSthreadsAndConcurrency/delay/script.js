let x = function () {
    return 10;
}
//Arrow functions(compact alternative to function expression)
let y = () => {
    return 11;
}
// document.getElementById('btnWait')
// <button id=​"btnWait">​Wait​</button>​
// btnWait
// null(when async and defer are not present because when the script 
//was downloading there was no body hence btnWait was null)
let btnWait = document.getElementById('btnWait');
let btnCount = document.getElementById('btnCount');
let divStatus = document.getElementById('divStatus');
let divVal = document.getElementById('divVal');

let count = 0;
//every element has a property onclick which can be assigned a function
btnCount.onclick = function () {
    count++;
    console.log('Count', count);
    divVal.textContent = count;
}
btnWait.onclick = function () {
    divStatus.textContent = 'Waiting'//batching
    console.log('Waiting');
    //wait 5s
    // The static Date.now() method returns the number of 
    //milliseconds elapsed since January 1, 1970
    let start = Date.now()
    //async delay
    //this function takes 2 arguments(function(), time(ms))
    setTimeout(() => {
        divStatus.textContent = 'Done'
        console.log('Done')
    }, 5000);
    // while (Date.now() < start + 5000) { 
    //interpreter will stop running other functionalities of this js code
    //as it has given only one thread
    //}//sync delay as it is ruuning into loop
    //website was frozen
    // divStatus.textContent = 'Done'
    // console.log('Done')
}
/*hardware thread: no. of parallel
calculations a processor does.(fixed in a processor)*/

function Person(name, age) {
    this.name = name
    this.age = age
    console.log(this);//window without new keyword
    return 10;
}

let p = new Person('Kritika', 21)
console.log('p = ' + JSON.stringify(p))
//new makes the object behaves like an object


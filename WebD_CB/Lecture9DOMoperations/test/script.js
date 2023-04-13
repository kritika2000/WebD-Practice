let btnPrint = document.getElementById('btnPrint');
let num = document.getElementById('num');
let list = document.getElementById('list');

let val = function (value) {
    //use switch-cases
    // if (!(value % 3) && !(value % 5)) return 'fizzbuzz';
    // if (!(value % 3)) return 'fizz';
    // return !(value % 5) ? 'buzz' : value;

    // let d3 = !(value % 3)
    // let d5 = !(value % 5)

    // if (d5 && d3) return 'fizzbuzz'
    // if (d3) return 'fizz'
    // if (d5) return 'buzz'
    // return value

    print = ''
    if (value % 3 == 0) print += 'fizz'
    if (value % 5 == 0) print += 'buzz'
    if (print == '') print += value
    return print
}

btnPrint.onclick = function () {
    let numvalue = num.value;
    let start = Date.now()
    for (i = 1; i <= numvalue; i++) {
        let item = document.createElement('li')
        item.textContent = val(i);
        list.appendChild(item)
        //list.innerHTML += `<li>${val(i)}</li>`//never appent innerHTML inside a for-loop
    }
    console.log('time taken: ', Date.now() - start)
}

/*
Complexity of arithmetic operators
-depends on the no. of bits in the operands.
+ = O(N)
- = O(N)
* / = O(N^2)
% = O(N^2)
*/

// <li></li> is a bit costly

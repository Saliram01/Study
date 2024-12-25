// counter
let count = 0;
function Decrease(){
    count--
    document.querySelector('#value').innerText = count;
}

function Increase(){
    count++
    document.querySelector('#value').innerText = count;
}

function Reset(){
    count = 0;
    document.querySelector('#value').innerText = count;
}

// input

let input = document.querySelector('#input');
input.setAttribute('min','1');
input.setAttribute('max','10');
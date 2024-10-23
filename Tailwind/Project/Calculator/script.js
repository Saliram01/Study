function appendDisplay(value){
    document.querySelector('#display').value += value;
}

function ClearDisplay(){
    document.querySelector('#display').value = '';
}

function remove(){
    let rm = document.querySelector('#display');
    rm.value = rm.value.slice(0,-1);
}

function Calculate(){
    let blank = document.querySelector('#display').value;
    if(blank == ''){
        return;
    }
    else {
        let display = document.querySelector('#display');
        display.value = eval(display.value);
    }
}
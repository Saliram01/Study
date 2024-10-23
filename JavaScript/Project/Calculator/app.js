function appendToDisplay(value) {
    document.querySelector('#display').value += value;
}
function clearDisplay() {
    document.querySelector('#display').value = '';
}
function remove() {
    let val = document.querySelector('#display');
    val.value = val.value.slice(0, -1);
}

function Calculate(){
    try{
        let display = document.querySelector('#display');
        display.value = eval(display.value);
    }
    catch(err){
        clearDisplay.value(err);
    }
}

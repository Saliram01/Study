
function displayTime() {
    let date = new Date();

    // Getting hrs, min and sec
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    // calculate hrs, min and sec with deg 
    let hrotation = 30 * h + m/2;
    let mrotation = 6 * m;
    let srotation = 6 * s;

    // Show hrs, min and sec in dom
    document.querySelector('#hrs').style.transform = `rotate(${hrotation}deg)`;
    document.querySelector('#min').style.transform = `rotate(${mrotation}deg)`;
    document.querySelector('#sec').style.transform = `rotate(${srotation}deg)`;
}

setInterval(displayTime,1000);

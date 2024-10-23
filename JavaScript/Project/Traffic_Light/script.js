function Start() {
    let sec = 60;
    setInterval(() => {
        sec--
        if (sec < 60 && sec > 50) {
            document.querySelector('.red').style.backgroundColor = '';
            document.querySelector('.green').style.backgroundColor = 'green';
        }
        else if (sec < 40 && sec > 30) {
            document.querySelector('.green').style.backgroundColor = '';
            document.querySelector('.orange').style.backgroundColor = 'orange';

        }
        else if (sec < 20 && sec > 10) {
            document.querySelector('.orange').style.backgroundColor = '';
            document.querySelector('.red').style.backgroundColor = 'red';
        }
        else if (sec === -1) {
            sec = 60
        }
        document.querySelector('.time').innerText = sec;
    }, 1000)
}
document.querySelector('.time').innerText = 'S';
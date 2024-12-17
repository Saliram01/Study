const hours = document.querySelector('.hrs');
const minutes = document.querySelector('.min');
const second = document.querySelector('.sec');
const session = document.querySelector('.ses');

function digitalWatch() {
    const day = new Date();

    let hrs = day.getHours();
    let min = day.getMinutes();
    let sec = day.getSeconds();

    let secion = hrs >= 12 ? 'PM' : 'AM'

    hrs = hrs > 12 ? hrs - 12 : hrs

    hrs = hrs <= 10 ? '0' + hrs : hrs
    min = min <= 10 ? '0' + min : min
    sec = sec <= 10 ? '0' + sec : sec

    hours.innerText = hrs;
    minutes.innerText = min;
    second.innerText = sec;
    session.innerText = secion;

    setTimeout(digitalWatch, 1000);
}
digitalWatch();
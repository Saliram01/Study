$(document).ready(function () {
    function ShowTime(){
        // To Get Current Time/Date
        const time = new Date();
        // make variable to get h , m and s
        let hrs = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();

        // priods
        let session = "AM";

        // conditions 
        if(hrs == 0){
            hrs = 12
        }

        if(hrs >= 12) {
            session = "PM";
        }

        if(hrs > 12){
            hrs = hrs - 12
        }

        hrs = hrs <= 10 ? '0' + hrs : hrs;
        min = min <= 10 ? '0' + min : min;
        sec = sec <= 10 ? '0' + sec : sec;

        $('#h').text(hrs)
        $('#m').text(min)
        $('#s').text(sec)
        $('#p').text(session)

        setTimeout(ShowTime,1000)
    }
    ShowTime();
})
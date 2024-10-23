$(document).ready(function () {
    function RandomNumber(length) {
        let random = '';
        for (let i = 0; i < length; i++) {
            let digit = (Math.floor(Math.random() * 10))
            random += digit.toString();
        }
        $('span').text(Number(random));
    }
    $('button').on('click',() => RandomNumber(6));
})
$(document).ready(function() {
    $('#fadeOut').click(() => {
        $('.box').fadeOut(3000,() => $('#fadeOut').text('Its Gone'));
    })

    $('#fadeIn').click(() => {
        $('.box').fadeIn(2000);
    })

    $('#fadeToggle').click(() => {
        $('.box').fadeToggle(1500);
    })

    $('#slideUp').click(() => {
        $('.box').slideUp(3000,() => $('#slideUp').text('Hide'));
    })

    $('#slideDown').click(() => {
        $('.box').slideDown(2000,() => $('#slideDown').text('Show'));
    })

    $('#slideToggle').click(() => {
        $('.box').slideToggle(1200);
    })

    $('#stop').click(() => {
        $('.box').stop();
    })
    
    $('#moveLeft').click(function() {
        $('#animate').animate({ left: '50px'});
    });

    $('#moveRight').click(function() {
        $('#animate').animate({ left: '1300px'});
    });

    $('#moveAround').click(function() {
        let box = $('#animate');
        box.animate({left : '200px'})
        box.animate({top : '200px'})
        box.animate({left : '0px',top : '200px'})
        box.animate({left : '0px',top : '0px'})
    })

    // Animate 
    // $('#wiki').animate({
    //     opacity : 0.5,
    //     height : '150px',
    //     width : '350px',
    // }, 2000); 
    // in duration we can also apply 'slow and fast'

})
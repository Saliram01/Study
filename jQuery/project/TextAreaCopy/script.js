$(document).ready(function(){
    // Make two functions to add and remove in the span
    function add(){
        $('.copied').addClass('bounce-effect');
        
    }
    function remove(){
        $('.copied').removeClass('bounce-effect');
    }

    // Call the function and copy the text on button click
    $('.copy-btn').click(function() {
        $('#textField').select();
        document.execCommand('copy');

        add();
        setTimeout(remove, 800)
    })
})
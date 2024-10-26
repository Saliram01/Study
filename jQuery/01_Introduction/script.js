// $('selector').action(); // Syntax Of JQuery

$(document).ready(() => {

    $('button').click(() => {
        alert("You clicked on button");
        // $('button').hide();
        // $(this).hide();
    });

    // form
    $('#inp').val('saliram chaudhary')
    $('#inp').html('saliram')
    //$('div').empty(''); // it is used to clear text only
    // $('div').detach(); // it also work as a empty method

    $('#ta').val('setting with saliram');
    $('#ta').html('setting with saliram');
    //$('#ta').remove(); //it is used to remove element from dom

})
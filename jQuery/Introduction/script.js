
//$('selector').action(); // Syntax Of JQuery

// There are 3 main types of selector in jQuery

// $('#id').action()  Id
// $('.class').action() Class
// $('p').action()  element

// Example 
// $(document).ready(() => {
//     $('button').click(() => {
//         console.log("You clicked on p");
//         // $('button').hide();
//         // $(this).hide();
//     });
// })


// $('p').click(function() {
//     console.log('You clicked on', this);
// })
// $('.add').click();

// $('*').click(); // click on all element
// $('p.add').click();
// $('p:first').click();


// Events in jQuery

// Mouse event = click , dblclick , mouseEnter, mouseleave;

// $('#dbl').dblclick(() => {
//     console.log("Clicked on dbl btn");
// })

// $('#mouseleave').mouseenter(() => {
//     console.log("mouseleaved success")
// })
// Keyboard event = keyPress , keydown , MediaKeyStatusMap
// form events = submit , change , focus , blur
// document/window events = load , resize , scroll , unload 

// onclick method
// $('#on').on('click',() => {console.log("On click button is clicked",this);});

// multiple event handle

// $(document).ready(function () {
    // $('span').on({

    //     click : function() {
    //         console.log("Thangs for onclick",this);
    //     },
    //     mouseleave : function(){
    //         console.log("Thangs for mouseleave",this);
    //     },
    //     mouseenter : function(){
    //         console.log("Thangs for keypress",this);
    //     }
    // })

    // $('#wiki').hide();
    // $('#wiki').hide(2000, function() {
    //     console.log("Hiden");
    // });
    // $('#wiki').show(2000, function() {
    //     console.log("show");
    // });

    // $('#butn').click(function(){ $('#wiki').fadeToggle(2000)})

    // fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()


    // $('#wiki').slideDown(2000)
    // $('#wiki').slideUp(2000)
    // $('#wiki').slideToggle(2000)
    // $('#butn').click(function(){ $('#wiki').slideToggle(2000)}) // onclick work

    // Animate 
    // $('#wiki').animate({
    //     opacity : 0.5,
    //     height : '150px',
    //     width : '350px',
    // }, 2000); 
    // in duration we can also apply 'slow and fast'


    // $('#wiki').animate({opacity : 0.3},4000)
    // $('#wiki').animate({opacity : 0.9},1000)
    // $('#wiki').animate({width : '350px'},12000)
    // $('#wiki').stop();


    // set text 
    // $('.add').text('set text'); // it is used for set text
    // $('.add').text(); // it is used for access text
    // $('body').html("i am working");

    // form
    // $('#inp').val('saliram chaudhary')
    // $('#inp').html('saliram')
    // // $('#wiki').empty(''); // it is used to clear text only
    // $('#ta').val('setting with saliram');
    // $('#ta').html('setting with saliram');
    // // $('#ta').remove(); it is used to remove element from dom

    // $('#inp').addClass('myClass');
    // $('#inp').addClass('myClass2');
    // $('#inp').removeClass('myClass'); // removeClass
    // $('#inp').removeClass('myClass2'); // removeClass


    // CSS
    // $('.jq').css('background-color','red');


    // get post syntax in console dom
    // Ajex using jQuery
    
    // $.get('https://code.jquery.com/jquery-3.7.1.js', function (data, status) {
    //     // console.log(data)
    //     // console.log(status)
    // });

    // $.post('https://code.jquery.com/jquery-3.7.1.js', {name : 'saliram', channer : 'official'}, function (data, status) {
    //     // console.log(data)
    //     // console.log(status)
    // });
    



    // SELF START PRACTICE

    $(document).ready(function () {
        // element creation 
    var newEl = $('<div>');
    $('body').append(newEl)

    // set inner text
    newEl.text('Hello div')

    // set id class
    $(newEl).attr('id','hello');
    $(newEl).attr('class','hii');
    $(newEl).addClass('className');

    // get id , class
    const c = $(newEl).attr('class');
    console.log(c);
    const i = $(newEl).attr('id');
    console.log(i);

    // When we trigger on element
    // $(newEl).click(() => {
    //     console.log("I am clicked");
    // })

    // $(newEl).on('click',() => {
    //     console.log("I am onCLicked");
    // })


    // Multiple add event handler on one element
    $(newEl).on({
        click : function (){console.log("single clicked");},
        dblclick : function () {console.log("double clicked");},
        mouseleave : function () {console.log("Mouseleave");}
    })


    // hide show 
    // $(newEl).hide(2000, function () {console.log("Hidden");})
    // $(newEl).show(2000, function () {console.log("Show");})

    // css
    $(newEl).css('color','yellow');
    $(newEl).css('font-size','1.5rem');
    // $(newEl).css({
    //     display : 'flex',
    //     justifyContent : 'center',
    //     alignItems : 'center',
    //     height : '100vh'
    // });
    $(newEl).css({display : 'grid', placeContent : 'center',height : '100vh'});
    $('body').css('backgroundColor','slategray')

    
    })


// })
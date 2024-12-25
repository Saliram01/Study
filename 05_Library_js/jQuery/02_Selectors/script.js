$(document).ready(function () {
    // There are 3 main types of selector in jQuery

    // $('#id').action()  //Id
    // $('.class').action() //Class
    // $('p').action()  //element

    $('#hs').click(() => {$('p').fadeToggle()})

    $('.heading').css('color', 'green')
    $('.heading').removeAttr('class', 'heading');
    $('h1').removeAttr('id', 'head');
    $('p').css('color', 'red');
    $('ul li:first').css('color', 'gray');
    $('ul li:last').css('color', 'blue');
    $('ul li:odd').css('backgroundColor', 'brown')
    $('ul li:even').css('backgroundColor', 'yellow')
    $('ul li:nth-child(3)').css('fontWeight', '800')

    // $(':text').hide();
    // $('input').hide();

    $('[href]').css('color', 'green')
    $('a[href="https://www.google.com"]').css('color', 'yellow')

    // $('*').hide();

    // element creation 
    var newEl = $('<div>');
    $('body').append(newEl)

    // set inner text
    newEl.text('Hello div')
    // newEl.html('<h2>Hello h2</h2>')
    $('ul').prepend('<li>Prepend element</li>')
    $('ul').append('<li>Append element</li>')
    // $('ul').appendTo('Hello')
    // $('ul').prependTo('Hii')
    $('ul').after('<li>hello</li>');
    $('ul').before('<li>hii</li>');

    // get inner text
    // let textValue = $(newEl).text();

    // set attribute id class
    $(newEl).attr('id', 'hello');
    $(newEl).attr('class', 'hii');

    // remove attribute 
    $(newEl).removeAttr('id','hello')

    $('ul').wrap('<li>Wrap</li>')

    // add class
    // $(newEl).addClass('className');

    // get id , class
    // const c = $(newEl).attr('class');
    // const i = $(newEl).attr('id');

    // toggle class
    $(document).click(() => {
        $('body').toggleClass('bg');
    })

    // hide show 
    $(newEl).hide(2000, function () { console.log("Hidden"); })
    $(newEl).show(2000, function () { console.log("Show"); })

    // css
    $(newEl).css('color', 'yellow');
    $(newEl).css('font-size', '1.5rem');
    $(newEl).css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    });
    $(newEl).css({ display: 'grid', placeContent: 'center', height: '100vh' });
    $('body').css('backgroundColor', '')

    // fill the input and enter for add list
    $('input').keydown((e) => {
        let code = e.which;
        if(code == 13){
            e.preventDefault();
            $('ul').append('<li>'+e.target.value+'</li>')
        }
    })

    const arr = ['apple','banana','mango','orange'];
    $.each(arr,function(i,v){
        // console.log(i,v);
        $('#array').append(`<li>${v}</li>`)
    })

    let newArr = $('ul li').toArray();
    $.each(newArr,function(i,v) {
        console.log(i,v.innerHTML);
    })
})
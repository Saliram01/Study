$(document).ready(() => {
    const newEl = $('<button>');
    newEl.text('button');
    $('body').prepend(newEl);

    // Design button
    $('body').css('backgroundColor','gray')
    newEl.css({
        width : '100%',
        height : '40px',
        borderRadius : '10px',
        border : 'none',

    })

    // hide and show
    // $(newEl).on('click',() => $('p').hide(2000))
    // $(newEl).on('click',() => $('p').show(2000))
    $(newEl).on('click',() => $('p').toggle(2000))

    // Hover 
    // $(newEl).hover(() => $('p').toggle(2000))

    // target on click
    $('p').on('click',(e) => console.log(e.target.innerHTML))

    // When we trigger on element
    $(newEl).click(() => console.log("I am clicked",this))
    $(newEl).on('click', () => console.log("I am onClicked", this))

    // Mouse event = click , dblclick , mouseEnter, mouseleave;
    // Keyboard event = keyPress , keydown , MediaKeyStatusMap
    // form events = submit , change , focus , blur
    // document/window events = load , resize , scroll , unload 

    $('#dbl').dblclick(() => console.log("Clicked on dbl btn"))

    $('#mouseleave').mouseenter(() => console.log("mouseleaved success"))

    // Multiple add event handler on one element
    $(newEl).on({
        click: () => { console.log("single clicked", this)},
        dblclick: () => { console.log("double clicked", this)},
        mouseleave: () => { console.log("Mouseleave", this)},
        mouseenter: () => { console.log("Mouseenter", this)},
        mousemove: () => { console.log("Mousemove", this)},
    })

    $('p').on('mousemove',(e) => {
        console.clear()
        console.log('clientX : '+ e.clientX + " , " + 'clientY : ' + e.clientY)
    })

    // Form event

    $('input').focus(function() {
        // $('input[type]').css('backgroundColor','pink')
        $(this).css('backgroundColor','pink')
    })
    $('input').blur(function() {
        $(this).css('backgroundColor','#f4f4f4')
    })
    // $('input').keyup(() => console.log('keyup'))
    $('input').keydown((e) => console.log('keydown'+ e.target.value))
    $('select#Gender').change((e) => alert("Changed : "+ e.target.value))
    $('form').submit((e) => {
        e.preventDefault() 
        let name = $('input').val()
        console.log("Submitted : ", name)
    })
})




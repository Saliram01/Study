$(document).ready(function () {
    $('#add').click(() => {
        const inputValue = $('input').val();

        if(inputValue == ''){
            return $('#field').focus();
        }
        else {
        const li = $('<li>')
        $(li).addClass('list');

        const ct = $('<div>');
        $(li).append(ct)
        $(ct).addClass('ct');
        const checkbox = $('<input>');
        $(checkbox).attr('type','checkbox')
        $(checkbox).addClass('check')
        $(ct).append(checkbox);

        const textcont = $('<p>');
        $(textcont).text(inputValue);
        $(checkbox).click(() => {
            $(textcont).toggleClass('checked');
        })
        $(ct).append(textcont);


        const btn = $('<div>');
        $(btn).text("Edit");
        $(btn).addClass('edit');
        $(li).append(btn)
        const btnn = $('<button>');
        $(btnn).text("Remove");
        $(btnn).addClass('remove')
        $(li).append(btnn)

        $('.list-container').append(li);
        $('#field').val('');
        }   

        $('.list-container').click((e) => {
            if(e.target.tagName == 'BUTTON'){
                e.target.parentElement.remove();
            }
        })
    })
})


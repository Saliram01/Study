let display = document.querySelector('#display');
let ul = document.querySelector('#list-container');

function Add(){
    if(display.value === ''){
        alert("Input field is empty write something!!")
    }
    else{
        let li = document.createElement('li');
        li.innerText = display.value;
        ul.appendChild(li);

        let close = document.createElement('span');
        close.innerText = '\u00d7';
        li.appendChild(close);

        let p = document.createElement('p');
        li.prepend(p);

        display.focus();
    }
    display.value = '';
    SaveData()
}

ul.addEventListener('click',(e) => {
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        SaveData();
    }

    else if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        SaveData();
    }

    else if(e.target.tagName === 'P'){
        e.target.classList.toggle('bg')
        SaveData();
    }
})

function SaveData(){
    localStorage.setItem('data', ul.innerHTML);
}

function ShowData(){
    ul.innerHTML = localStorage.getItem('data');
}
ShowData()




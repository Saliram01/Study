const fullDarkMood = document.querySelector('#full-dark-mood');
const containerDarkMood = document.querySelector('#content-dark-mood');
const container = document.querySelector('.container');

const isFullDarkMood = JSON.parse(localStorage.getItem('fullDarkMood.checked'));
const isContainerDarkMood = JSON.parse(localStorage.getItem('containerDarkMood.checked'));

if(isFullDarkMood){fullDarkMood.checked = true;}

if(isContainerDarkMood){containerDarkMood.checked = true;}

changeFullDarkMood();
changeContainerDarkMood();

fullDarkMood.addEventListener('change',() => {
    changeFullDarkMood();
    changeContainerDarkMood();
})

function changeFullDarkMood() {
    changeTheme(fullDarkMood,document.body,'fullDarkMood.checked');
}


function changeContainerDarkMood() {
    changeTheme(containerDarkMood,container,'containerDarkMood.checked');
}


function changeTheme(checkBox , element , localStorageKey) {
    if (checkBox.checked) {
        element.classList.add('dark');
        localStorage.setItem(localStorageKey,true)
    } else {
        element.classList.remove('dark');
        localStorage.setItem(localStorageKey,false)
    }
}
containerDarkMood.addEventListener('change', changeContainerDarkMood) 
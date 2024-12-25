const form = document.querySelector('.second');
const nextBtn = document.querySelector('.nextBtn');
const backBtn = document.querySelector('.backBtn');

nextBtn.addEventListener('click',() => {
    form.classList.remove('s');
})

backBtn.addEventListener('click',() => {
    form.classList.add('s');
})
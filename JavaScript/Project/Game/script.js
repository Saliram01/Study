const basket1 = document.querySelector('.basket-1 span');
const basket2 = document.querySelector('.basket-2 span');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let totalApple = 10;
let secondBasket = 0;
let firstBasket = totalApple - secondBasket;

basket1.innerText = firstBasket;
basket2.innerText = secondBasket;

rightArrow.addEventListener('click', () => {
    if(firstBasket > 0){
        firstBasket--
        basket1.innerText = firstBasket;
        secondBasket++
        basket2.innerText = secondBasket;
    }
    else{
        alert("Apple is finished in basket 1");
    }
})
leftArrow.addEventListener('click', () => {
    if(secondBasket > 0){
        secondBasket--
        basket2.innerText = secondBasket;
        firstBasket++
        basket1.innerText = firstBasket;
    }
    else{
        alert("Apple is finished in basket 2");
    }
})




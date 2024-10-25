// Meal
let count1 = 0;
let stop1 = setInterval(() => {
    let meal = count1++
    document.querySelector('#meal').innerText = meal;
    if (meal === 400) {
        StopFunc1();
    }
},0)
function StopFunc1() {clearInterval(stop1);}

// Happy
let count2 = 0;
let stop2 = setInterval(() => {
    let happy = count2++
    document.querySelector('#smile').innerText = happy;
    if(happy === 340){
        StopFunc2();
    }
},5)
function StopFunc2(){clearInterval(stop2)}

// Menu
let count3 = 0;
let stop3 = setInterval(() => {
    let menu = count3++
    document.querySelector('#menu').innerText = menu;
    if(menu === 225){
        StopFunc3();
    }
},8)
function StopFunc3(){clearInterval(stop3)}

// Star
let count4 = 0;
let stop4 = setInterval(() => {
    let star = count4++
    document.querySelector('#star').innerText = star;
    if(star === 280){
        StopFunc4();
    }
},6)
function StopFunc4(){clearInterval(stop4)}


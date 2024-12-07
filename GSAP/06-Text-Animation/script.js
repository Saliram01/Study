
function breakTheText() {
    var letter = document.querySelector('h1');
    var splitedLetter = letter.textContent;

    var halfValue = splitedLetter.length / 2;
    
    var clutter = "";
    splitedLetter.split('')
        .forEach(function (elem,idx) {
            if(idx < halfValue){
                clutter += `<span class="a">${elem}</span>`;
            } else {
                clutter += `<span class="b">${elem}</span>`;
            }
        })
    letter.innerHTML = clutter;
} breakTheText();

gsap.from("h1 .a", {
    y: 80,
    opacity:0,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15,
});
gsap.from("h1 .b", {
    y: 80,
    opacity:0,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15,
});
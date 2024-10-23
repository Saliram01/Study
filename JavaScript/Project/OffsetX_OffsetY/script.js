const target = document.querySelector('#box');
target.addEventListener('mousemove',(e) => {
    console.clear();
    const x = e.offsetX;
    const y = e.offsetY;

    console.log('offsetX : ' + x);
    console.log('offsetY : ' + y);
})
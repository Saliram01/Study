const pointer = document.getElementById('pointer');

document.addEventListener('mousemove',function(e){
    gsap.to(pointer,{
        x: e.x,
        y: e.y,
        duration: 0.6,
    })
})
const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const img = document.querySelector("#image");

main.addEventListener('mousemove',function(e){
    // document.body.style.cursor = 'none' // hidden main cursor
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.6,

    });
})

img.addEventListener('mouseenter', function(){
    cursor.innerHTML = 'View More'
    gsap.to(cursor,{
        scale: 3,
        backgroundColor: "#ffffff76",
    });
})
img.addEventListener('mouseleave', function(){
    cursor.innerHTML = ''
    gsap.to(cursor,{
        scale: 1,
        backgroundColor: "#fff",
    });
})
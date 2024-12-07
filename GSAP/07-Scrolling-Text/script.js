function marqueAnimation() {
    window.addEventListener('wheel',function(e){
        if(e.deltaY > 0) {
            gsap.to(".marque", {
                transform: 'translateX(-200%)',
                duration: 8,
                repeat: -1,
                ease: "none",
            })
    
            gsap.to(".marque img",{
                rotate: 180,
            });
    
        } else {
            gsap.to(".marque", {
                transform: 'translateX(0%)',
                duration: 8,
                repeat: -1,
                ease: "none",
            })
            gsap.to(".marque img",{
                rotate:0,
            });
        }
    })
} marqueAnimation();
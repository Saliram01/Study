function firstPageAnimation() {
    var tl = gsap.timeline();
    gsap.from("nav h1",{
        y: -40,
        opacity: 0,
        delay: 0.5,
        duration: 1,
    });

    tl.from("nav h4",{
        y: -40,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        stagger:0.3,
    });

    tl.from("nav button",{
        opacity: 0,
        duration: 1,
    });

    gsap.from(".center-part1 h1", {
        x: -620,
        opacity: 0,
        delay:0.5,
        duration: 1,
    });

    gsap.from(".center-part1 p", {
        x: -200,
        opacity: 0,
        delay:0.5,
        duration: 1,
    });

    gsap.from(".center-part1 button", {
        y: 50,
        opacity: 0,
        delay:0.5,
        duration: 1,
    });

    gsap.from(".center-part2 img", {
        x: 200,
        delay:0.5,
        opacity: 0,
        duration: 1,
    });

    gsap.from(".bottom img", {
        y: 30,
        delay:0.5,
        opacity: 0,
        duration: 1,
        stagger:0.3,
    });

} 
firstPageAnimation();

function secondPageAnim(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top -80%",
            scrub:2,
        }
    });
    
    tl2.from(".services",{
        y: 30,
        opacity:0,
        duration:0.5,
    });
    
    tl2.from(".elem.line1.left",{
        x: -300,
        opacity:0,
        duration:1,
    },"anim1");
    
    tl2.from(".elem.line1.right",{
        x: 300,
        opacity:0,
        duration:1,
    },"anim1");
    tl2.from(".elem.line2.left",{
        x: -300,
        opacity:0,
        duration:1,
    },"anim2");
    
    tl2.from(".elem.line2.right",{
        x: 300,
        opacity:0,
        duration:1,
    },"anim2");
    
    // Dublicate
     
    tl2.from(".elem.line3.left",{
        x: -300,
        opacity:0,
        duration:1,
    },"anim3");
    
    tl2.from(".elem.line3.right",{
        x: 300,
        opacity:0,
        duration:1,
    },"anim3");
    
    tl2.from(".elem.line4.left",{
        x: -300,
        opacity:0,
        duration:1,
    },"anim4");
    
    tl2.from(".elem.line4.right",{
        x: 300,
        opacity:0,
        duration:1,
    },"anim4");
} 
secondPageAnim();
gsap.from("#page1 #box",{
    scale:0,
    opacity:0,
    y:-50,
    duration:2,
    delay:0.5,
    rotate:360,
});

gsap.from("#page2 h1",{
    x:500,
    opacity:0,
    duration:2,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        markers: true,
        start: "top 50%",
    }
});
gsap.from("#page2 h2",{
    x: -500,
    opacity:0,
    duration:2,
    scrollTrigger: {
        trigger: "#page2 h2",
        scroller: "body",
        markers: true,
        start:"top 60%",
    }
});
gsap.from("#page3 #box3",{
    opacity:0,
    scale:0,
    duration: 2,
    y:200,
    scrollTrigger: {
        trigger: "#page3 #box3",
        scroller: "body",
        markers: true,
    }
});
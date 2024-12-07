const tl = gsap.timeline();
tl.from("h2",{
    y:-25,
    opacity:0,
    duration:1,
    delay:0.5,
});

tl.from("li",{
    y:-25,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3,
});

tl.from("h1",{
    y: 300,
    opacity:0,
    scale:0.5,
    duration:1,
});
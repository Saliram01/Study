var tl = gsap.timeline();
tl.from("h2", {
    y: -10,
    duration: 1,
    opacity: 0,
    delay: 0.5,
});
tl.from("h4", {
    y: -10,
    duration: 1,
    opacity: 0,
    delay: 0.5,
    stagger: 0.3,
});

tl.from("h1", {
    y: 10,
    opacity: 0,
    duration: 0.5,
    scale: 0.2,
});

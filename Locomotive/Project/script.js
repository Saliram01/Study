function loading() {
    const tl = gsap.timeline();

    tl.to('#yellow', {
        top: "-100%",
        delay: 0.5,
        duration: 1,
        ease: "expo.out",
    });

    tl.to('#loader', {
        top: "-100%",
        delay: 0.5,
        duration: 1,
        ease: "expo.out",
    },"anim");

    tl.to('#loader h1',{
        delay:0.6,
        duration:0.7,
        color: "black",
    },"anim");

    tl.to('#loader',{
        opacity:0,
    });

    tl.to('#loader',{
        display:none,
    });

}
// loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.05,
})
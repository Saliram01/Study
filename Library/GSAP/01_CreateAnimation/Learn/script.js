
// BOX
// gsap.to("#box1",{
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "yellow",
//     borderRadius: "50%",
//     // repeat: -1, // infinite rotate
//     repeat: 1, // 2 times repeat 
//     yoyo: true // it is used to reverse the animation
//     // scale: 2
// });

// gsap.from("#box2",{
//     x: 1200,
//     // y: 600,
//     duration: 2,
//     delay: 1,
//     rotate: 360
// })

// TEXT
// gsap.from('h1',{
//     color: 'red',
//     duration: 2,
//     delay: 1,
//     opacity: 0,
//     y: 30,
//     stagger: 1
// });


// TIMELINE

// gsap.to("#box3",{
//     x: 1200,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1,
// });

// gsap.to("#box4",{
//     x: 1200,
//     rotate: 180,
//     duration:1.5,
//     delay:2.5,
// });

// gsap.to("#box5",{
//     x: 1200,
//     duration: 1.5,
//     delay: 4,
// });

var tl = gsap.timeline();
tl.to("#box3",{
    x: 1335,
    rotate: 360,
    duration: 1.5,
    delay: 1,
});

tl.to("#box4",{
    x: 1335,
    rotate: 180,
    duration: 1.5,
});

tl.to("#box5",{
    x: 1335,
    duration: 1.5,
});
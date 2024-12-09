const swiper = new Swiper('.swiper',{
    loop:true,
    // autoplay:true,
    grabCursor: true,
    mousewheel: true,
    // direction:'vertical',
    // slidesPerView:'auto',
    // spaceBetween: 30,
    // centeredSlides: true,
    // freeMoods:true,
    // initialSlide:2,
    // effect: 'fade',
    speed:800,
    effect:'coverflow',
    preventClicks:true,
    coverflowEffect: {
        rotate:0,
        stretch:80,
        depth:350,
        modifier:1,
        slideShadows:true,
    },

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets:true,
        clickable:true,
    },

    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});
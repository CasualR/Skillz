"use strict"

new Swiper('.slider_container',{
    speed: 1000,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
    },

    loop: true,

    autoplay: {
        delay: 3000,

        disableOnInteraction: false,
    },
});
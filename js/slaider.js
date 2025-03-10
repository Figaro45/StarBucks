let swiper01 = new Swiper('.block_swiper01', {
    slidesPerView: 4,
    spaceBetween: 1,
    breakpoints: {
        1500: {
            slidesPerView: 4,
            spaceBetween: 1,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 1,
        },
        700: {
            slidesPerView: 2.5,
            spaceBetween: 1,
        },
        600: {
            slidesPerView: 2.9,
            spaceBetween: 1,
        },
        500: {
            slidesPerView: 2.8,
            spaceBetween: 1,
        },
        300: {
            slidesPerView: 1.7,
            spaceBetween: 1,
        },
        1: {
            slidesPerView: 1.5,
            spaceBetween: 1,
        },
    }
});


let swiper02 = new Swiper('.block_swiper02', {
    slidesPerView: 0.5,
});


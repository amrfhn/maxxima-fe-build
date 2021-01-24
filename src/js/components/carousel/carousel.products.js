import Swiper from 'swiper';

$('.carousel.variant-products').each(function () {
    let $element = $(this);

    new Swiper(this, {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: $element.find('.swiper-pagination'),
            type: 'bullets',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        },
    })
})
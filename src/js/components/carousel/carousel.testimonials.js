import Swiper from 'swiper';

$('.carousel.variant-testimonials').each(function () {
    let $element = $(this);

    new Swiper(this, {
        slidesPerView: 1,
        pagination: {
            el: $element.find('.swiper-pagination'),
            type: 'bullets',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            }
        },
    })
})
import { Swiper, Pagination } from 'swiper';
Swiper.use([Pagination]);

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;

$('.carousel.variant-testimonials').each(function () {
    let $element = $(this);

    // var numSlides = $element.find('.swiper-container .swiper-slide').length;
    // if (numSlides <= 1) {
    //     $element.find('.swiper-pagination').addClass('d-none')
    // }

    new Swiper(this, {
        slidesPerView: 1,
        pagination: {
            el: $element.find('.swiper-pagination').get(0),
            type: 'bullets',
            clickable: true
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
import { Swiper, Pagination } from 'swiper';
Swiper.use([Pagination]);

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;

$('.carousel.variant-card1').each(function () {
    let $element = $(this);

    var numSlides = $element.find('.swiper-container .swiper-slide').length;
    if (numSlides <= 3 && !isMobile) {
        $element.find('.swiper-pagination').addClass('d-none')
    }
    
    new Swiper(this, {
        slidesPerView: 1,
        spaceBetween: 30,

        pagination: {
            el: $element.find('.swiper-pagination').get(0),
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
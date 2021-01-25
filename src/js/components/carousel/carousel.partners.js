import { Swiper, Pagination } from 'swiper';
import { Navigation } from 'swiper';
Swiper.use([Navigation]);
// Swiper.use([Pagination]);

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;

$('.carousel.variant-partners').each(function () {
    let $element = $(this);

    // var numSlides = $element.find('.swiper-container .swiper-slide').length;
    // if (numSlides <= 3 && !isMobile) {
    //     $element.find('.swiper-pagination').addClass('d-none')
    // }

    new Swiper(this, {
        slidesPerView: 1,
        spaceBetween: 30,

        // pagination: {
        //     el: $element.find('.swiper-pagination').get(0),
        //     type: 'bullets',
        //     clickable: true
        // },
        navigation: {
            prevEl: $element.find('.swiper-button-prev').get(0),
            nextEl: $element.find('.swiper-button-next').get(0),
        },
        breakpoints: {
            768: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 60
            }
        },
    })
})
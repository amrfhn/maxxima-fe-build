$(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.type-video').find('.video-container').removeClass('ratio ratio-16x9');
    } else {
        $('.type-video').find('.video-container').addClass('ratio ratio-16x9');
    }
})
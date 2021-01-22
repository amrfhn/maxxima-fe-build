$(function () {
    var target = $(':target').offset();
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;

    var scrollto = target.top - (isMobile ? 60 : 95);

    $('html, body').animate({ scrollTop: scrollto }, 0);
})
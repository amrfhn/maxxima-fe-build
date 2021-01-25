$(function () {
    const $header = $('#mainNavigation');
    const mql = window.matchMedia('(min-width: 768px)');
    let isMobile = mql.matches;
    
    $('#mainNavigation .nav-item .nav-link')
        .on('click', function (e) {
            e.preventDefault();

            const href = $(e.target).attr('href');
            const $target = $(href);
            window.scrollTo({
                top: $target.offset().top - $header.height(),
                behavior: 'smooth'
            })
        })
})
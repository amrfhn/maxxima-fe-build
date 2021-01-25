import ScrollOut from 'scroll-out';

$(function () {
    $('.animated.text-slide-in').each(function () {
        $(this).html($(this).text().replace(/\S+/g, '<n>$&</n>'))
        $(this).find('n').attr('data-scroll', true)
    })

    ScrollOut()
})
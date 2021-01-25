$(function () {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
    var cardVar1 = $('.card-variant-1');

    // if (!isMobile) {
        cardVar1.each(function () {
            var highestContent = 0;
    
            $(cardVar1, this).find('.card-body').each(function () {
                if ($(this).height() > highestContent) {
                    highestContent = $(this).height();
                }
            });
    
            $(cardVar1, this).find('.card-body').height(highestContent + 10);
        });
    // }
})

$(function () {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
    var cardVar2 = $('.card-variant-2');

    // if (!isMobile) {
        cardVar2.each(function () {
            var highestContent = 0;
    
            $(cardVar2, this).find('.card-text').each(function () {
                if ($(this).height() > highestContent) {
                    highestContent = $(this).height();
                }
            });
    
            $(cardVar2, this).find('.card-text').height(highestContent + 16);
        });
    // }
})
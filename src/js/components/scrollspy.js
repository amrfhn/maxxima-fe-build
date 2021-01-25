import { ScrollSpy } from 'bootstrap';

$(function () {
    createSpy(document.body, '#mainNavigation');

    function createSpy (element, targetSelector) {        
        window.scrollTo({ top: 0, behavior: 'auto' })
        setTimeout(function () {
            const instance = new ScrollSpy(element, {
                target: targetSelector,
                offset: $(targetSelector).height() + 10
            })
        }, 1000)
    }
})
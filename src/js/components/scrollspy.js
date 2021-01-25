import { ScrollSpy } from 'bootstrap';

$(function () {
    const mql = window.matchMedia('(min-width: 768px)');
    let isMobile = mql.matches;
    
    createSpy(document.body, '#mainNavigation');

    mql.addEventListener('change', function (e) {
        const body = document.body;

        if (isMobile !== e.matches) {
            createSpy(body, '#mainNavigation')
        }
        
        isMobile = e.matches;
    })

    function createSpy (element, targetSelector) {
        const existingInstance = ScrollSpy.getInstance(element);
        existingInstance?.dispose()
        
        new ScrollSpy(element, {
            target: targetSelector,
            offset: isMobile ? 60 : 95
        })
    }
})
import { ScrollSpy } from 'bootstrap';

$(function () {
    const mql = window.matchMedia('(min-width: 768px)');
    let isMobile = mql.matches;
    
    createSpy(document.body, '#mainNavigation');

    

    function createSpy (element, targetSelector) {
        const existingInstance = ScrollSpy.getInstance(element);
        existingInstance?.dispose()
        
        new ScrollSpy(element, {
            target: targetSelector
        })
    }
})
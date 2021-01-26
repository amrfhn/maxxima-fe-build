import { ScrollSpy } from 'bootstrap';

$(function () {   
    
    let instance;
    createSpy(document.body, '#mainNavigation');

    function createSpy (element, targetSelector) {        
        instance = new ScrollSpy(element, {
            target: targetSelector,
            offset: $(targetSelector).height() + 10
        })
    }

    window.onload = function () {
        setTimeout(() => {
            instance.refresh()
            instance['_offsets'] = instance['_offsets'].map(o => o += window.scrollY)
        }, 1000);
    }
})
import "../scss/index.scss"
import "bootstrap";

import 'core-js';
import './global';
import 'regenerator-runtime/runtime';
import "./components/video-banner";
import "./components/carousel/carousel.testimonials";



$(function () {
    console.log('Document ready!')
})

if (module.hot) {
    module.hot.accept()
}
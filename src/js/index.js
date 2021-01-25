import "../scss/index.scss"
import "bootstrap";

import 'core-js';
import './global';
import 'regenerator-runtime/runtime';
import "./components/carousel/carousel.testimonials";
import "./components/carousel/carousel.products";
import "./components/carousel/carousel.card";
import "./components/carousel/carousel.partners";
import "./components/card";
import "./components/scrollspy";


// $(function () {
//     console.log('Document ready!')
// })



if (module.hot) {
    module.hot.accept()
}
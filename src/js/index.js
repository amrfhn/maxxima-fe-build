import "../scss/index.scss"
import "bootstrap";

import 'core-js';
import './global';
import 'regenerator-runtime/runtime';
import "./components/carousel/carousel.testimonials";
import "./components/carousel/carousel.products";
import "./components/carousel/carousel.card";
import "./components/card";


// $(function () {
//     console.log('Document ready!')
// })



if (module.hot) {
    module.hot.accept()
}
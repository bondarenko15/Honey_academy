import initSlider from './sliders.min.js';
import showMenu from './showMenu.min.js';
import headerFixed from './headerFixed.min.js';
import langToggle from './langToggle.min.js';
import mobileMenuToggle from './mobileMenuToggle.min.js';
import hideQuantity from './hideQuantity.min.js';
import ShowAndHide from './ShowAndHide.min.js';
import ratesWidth from './ratesWidth.min.js';
import validatejs from './validate.min.js';
import openPopUP from './openPopUp.min.js';+

validatejs();


initSlider();

showMenu();

headerFixed();

langToggle();

mobileMenuToggle();

hideQuantity()

ShowAndHide();

ratesWidth();

openPopUP();







const fancybox = document.querySelector('[data-fancybox]') || null;
    if (fancybox) {
        Fancybox.bind('[data-fancybox]', {
            groupAll: true,
        });
    }






import initSlider from './sliders.min.js';
import showMenu from './showMenu.min.js';
import headerFixed from './headerFixed.min.js';
import langToggle from './langToggle.min.js';
import mobileMenuToggle from './mobileMenuToggle.min.js';
import hideQuantity from './hideQuantity.min.js';
import ShowAndHide from './ShowAndHide.min.js';


initSlider();

showMenu();

headerFixed();

langToggle();

mobileMenuToggle();

hideQuantity()

ShowAndHide();

const rates = document.querySelector('.rates_main') || null;
if (rates) {
    const name = document.querySelector('.table_name').offsetWidth;

    const tableOptions = document.querySelector('.block_table-options');

    tableOptions.style.marginLeft = name + "px";

    const item = document.querySelectorAll('.table_value');
    const itemOptions = document.querySelectorAll('.options_items .item');
    const itemOptionsMount = document.querySelectorAll('.options_items .item_month');
    const optionsItems = document.querySelectorAll('.options_items');
    item.forEach((i) => {
        let valueWidth = i.offsetWidth;
        console.log(valueWidth)
        itemOptions.forEach((a) => {
            a.style.width = (valueWidth * 2) + "px";
        })
        itemOptionsMount.forEach((c) => {
            c.style.width = valueWidth + "px";
        })
        optionsItems.forEach((b) => {
            b.style.width = (valueWidth * 6) + "px";
        })

    })
};
Fancybox.bind('[data-fancybox]', {
});









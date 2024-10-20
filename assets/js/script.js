import initSlider from './sliders.min.js';
import showMenu from './showMenu.min.js';
import headerFixed from './headerFixed.min.js';
import langToggle from './langToggle.min.js';
import mobileMenuToggle from './mobileMenuToggle.min.js';
import hideQuantity from './hideQuantity.min.js';
import ShowAndHide from './ShowAndHide.min.js';
import ratesWidth from './ratesWidth.min.js';
import validatejs from './validate.min.js';
import openPopUP from './openPopUp.min.js';
import counter from './counter.min.js';


validatejs();

counter();

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





    // Получаем все элементы вкладок
const tabs = document.querySelectorAll('.product_card-tabs .item');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Удаляем активный класс у всех вкладок и добавляем только к текущей
        tabs.forEach(t => t.classList.remove('item-active'));
        tab.classList.add('item-active');

        // Получаем цену для нового элемента
        const newPrice = tab.dataset.price; // Предполагаем, что цена хранится в data-price
        const priceElement = document.querySelector('.product_card-text .price_new');
        const inputField = document.querySelector('.counter_wrapper input'); // Находим поле ввода счетчика

        // Обновляем цену в price_new и в data-price
        priceElement.textContent = `${newPrice} ₴`;
        priceElement.dataset.price = newPrice;

        // Сбрасываем счетчик
        inputField.value = 1;
        document.querySelector('.quantity_item').textContent = 1; // Обновляем отображаемое количество

        // Деактивируем кнопку "минус", если значение 1
        const counterWrapper = inputField.closest('.counter_wrapper');
        counterWrapper.querySelector('.counter_button-minus').classList.add('disabled');
    });
});

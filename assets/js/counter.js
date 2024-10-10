export default function counter() {
    const counters = document.querySelectorAll('[data-counter]') || null;

    if (counters) {
        counters.forEach(counter => {
            counter.addEventListener('click', e => {
                const target = e.target;
                const counterWrapper = target.closest('.counter_wrapper');
                const input = counterWrapper.querySelector('input');
                const priceElement = counter.closest('.product_card-text').querySelector('.price');

                const unitPrice = parseFloat(priceElement.dataset.price) || parseFloat(priceElement.textContent.replace(/\D/g, ''));

                if (!priceElement.dataset.price) {
                    priceElement.dataset.price = unitPrice;
                }

                if (target.closest('.counter_button')) {
                    if (input.value === '' && (target.classList.contains('counter_button-minus') || target.classList.contains('counter_button-plus'))) {
                        input.value = 0;
                    }

                    let value = parseInt(input.value);

                    if (target.classList.contains('counter_button-plus')) {
                        value++;
                    } else {
                        value--;
                    }

                    if (value <= 1) {
                        value = 1;
                        counterWrapper.querySelector('.counter_button-minus').classList.add('disabled');
                    } else {
                        counterWrapper.querySelector('.counter_button-minus').classList.remove('disabled');
                    }
                    input.value = value;
                    const newPrice = unitPrice * value;
                    priceElement.textContent = `${newPrice} ₴`;
                }
            });
        });
    }

}
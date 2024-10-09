export default function ShowAndHide() {
    const filter = document.querySelector('.filter_categories') || null;
    if (filter) {
        const filterBtn = document.querySelector('.btn-store');
        const filterCategories = document.querySelector('.filter_categories');
        filterBtn.addEventListener('click', () => {
            if (filterCategories.classList.contains('show')) {
                filterCategories.classList.remove('show');
            } else {
                filterCategories.classList.add('show');
            }
        });
    }


    const btnToggle = document.querySelector('.arrow_down');
    const phoneItems = document.querySelectorAll('.phone_item');
    const mobileNumber = document.querySelector('.header_phone');
    const wrapper = document.querySelector('body');
    if (phoneItems.length >= 2) {
        btnToggle.addEventListener('click', () => {
            mobileNumber.classList.toggle('phone_active');
            phoneItems.forEach((item) => {
                item.classList.toggle('phone_item_active');
            });
        });
        document.addEventListener('click', (e) => {
            if (!mobileNumber.contains(e.target) && !btnToggle.contains(e.target)) {
                phoneItems.forEach((item) => {
                    item.classList.remove('phone_item_active');
                });
                mobileNumber.classList.remove('phone_active');
            }
        });
    }

    function updateForm() {
        const firstSlideImg = document.querySelector('.mySwiper2 .swiper-slide img');
        const formImg = document.querySelector('.form_buy .item .img img');
        const productTitle = document.querySelector('.product_card-title');
        const formDescr = document.querySelector('.form_buy .item .text .descr');
        const priceNew = document.querySelector('.price_new');
        const formPrice = document.querySelector('.form_buy .item .text .price');
        if (firstSlideImg && formImg && productTitle && formDescr && priceNew && formPrice) {
            formImg.src = firstSlideImg.src;
            formDescr.textContent = productTitle.textContent;
            formPrice.textContent = priceNew.textContent;
        }
    }
    const btnBuy = document.querySelector('.btnBuy');
    if (btnBuy) {
        btnBuy.addEventListener('click', updateForm);
    }

}
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
    const phoneItem = document.querySelectorAll('.phone_item');
    const mobileNumber = document.querySelector('.header_phone');
    const wrapper = document.querySelector('body');
    btnToggle.addEventListener('click', () => {
        mobileNumber.classList.toggle('phone_active');
        phoneItem.forEach((item) => {
            item.classList.toggle('phone_item_active');
            document.addEventListener('click', (e) => {
                if (!mobileNumber.contains(e.target)) {
                    item.classList.remove('phone_item_active');
                    mobileNumber.classList.remove('phone_active');

                }
            });
        })

    })



}
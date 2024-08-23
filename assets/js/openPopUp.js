export default function openPopUp() {
    const modalPopUp = document.querySelector('.modal_form') || null;

    if (modalPopUp) {
        const btnWrapper = document.querySelectorAll('.btn');
        const closePopUp = document.querySelectorAll('.modal_form .close');
        const wrapperPopUp = document.querySelector('.wrapper_form');
        btnWrapper.forEach((item) => {
            item.addEventListener('click', () => {
                modalPopUp.classList.add('isShow');
                if (item.classList.contains('btn_courses')) {
                    document.querySelector('.form_courses').classList.add('active');
                } else if (item.classList.contains('btn_card')) {
                    document.querySelector('.form_excursion').classList.add('active');
                }
                else if (item.classList.contains('btnBuy')) {
                    document.querySelector('.form_buy').classList.add('active');
                }
                else if (item.classList.contains('btn_main') || item.classList.contains('btn_banner') || item.classList.contains('btn_services')) {
                    document.querySelector('.form_base').classList.add('active');
                }
                closePopUp.forEach((btn) => {
                    btn.addEventListener('click', () => {
                        modalPopUp.classList.remove('isShow');
                        document.querySelectorAll('.form_popUp').forEach((item) => {
                            item.classList.remove('active');
                        })
                    })
                })
                modalPopUp.addEventListener('click', (e) => {
                    if (!wrapperPopUp.contains(e.target)) {
                        modalPopUp.classList.remove('isShow');
                        document.querySelectorAll('.form_popUp').forEach((item) => {
                            item.classList.remove('active');
                        })
                    }
                });
            })
        })
    }
}
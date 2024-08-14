export default function showMenu() {
    const mobileMenu = document.querySelector('.mobile-menu') || null;
    if (mobileMenu) {
        const menuBtn = document.querySelector('.header_menu');
        const closeMenu = document.querySelector('.close');
        const body = document.querySelector('body');
        const show = () => {
            mobileMenu.classList.add('menuShow');
            body.style.overflow = 'hidden';
        }
        const hide = () => {
            mobileMenu.classList.remove('menuShow');
            body.style.overflow = 'visible';
        }

        menuBtn.addEventListener('click', show)

        closeMenu.addEventListener('click', hide)
        document.addEventListener('click', (event) => {
            if (event.target == mobileMenu) {
                hide();
            }
        })
    }
}



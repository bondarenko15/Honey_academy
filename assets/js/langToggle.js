export default function langToggle() {
    const lang = document.querySelector('.language') || null;
    if (lang) {
        const btnToggle = document.querySelector('.language .item');
        const langMenu = document.querySelector('.lang_items')
        btnToggle.addEventListener('click', () => {
            langMenu.classList.toggle('show')
        })
    }
}
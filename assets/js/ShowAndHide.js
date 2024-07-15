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



}
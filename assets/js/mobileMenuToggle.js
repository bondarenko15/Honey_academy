export default function mobileMenuToggle() {
  const mobileMenuItems = document.querySelectorAll('.mobile-nav .item') || null;
  mobileMenuItems.forEach((item) => {
    const sibling = item.nextElementSibling;
    item.addEventListener('click', () => {
      if (item.classList.contains('show')) {
        item.classList.remove('show');
        sibling.classList.remove('show');
      } else {
        item.classList.add('show');
      }
    })
  })
}
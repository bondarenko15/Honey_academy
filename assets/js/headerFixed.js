export default function headerFixed() {
    const header = document.querySelector('.header') || null;
    if (header)
    window.addEventListener('scroll', function () {
      if (window.scrollY > 1) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    });
}



export default function videoFancyBox() {
    const fancybox = document.querySelector('[data-fancybox]') || null;

    if (fancybox) {
      Fancybox.bind('[data-fancybox]', {
      });
    }
}



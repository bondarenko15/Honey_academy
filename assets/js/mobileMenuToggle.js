export default function mobileMenuToggle() {
    const mobileMenuItems = document.querySelectorAll('.mobile-item') || null;
    if (mobileMenuItems) {
        mobileMenuItems.forEach(item => {
            item.addEventListener('click', () => {
                const subItems = document.querySelectorAll('.subitems');
                subItems.forEach((subitem) => {
                    if (subitem.classList.contains('show')) {
                        subitem.classList.remove('show');
                    } else {
                        subitem.classList.remove('show');
                    }
                    subitem.classList.add('show');
                })

            })
            
        })
    }
}

/* menuMobileBtn.forEach((item) => {
    const sibling = item.nextElementSibling;
    item.addEventListener('click', () => {
      if (item.classList.contains('menu_btn-active')) {
        item.classList.remove('menu_btn-active');
        sibling.classList.remove('active');
      } else {
        menuMobileBtn.forEach((subitem) => {
          subitem.classList.remove('menu_btn-active');
          sibling.classList.remove('active');
  
        })
        item.classList.add('menu_btn-active');
        sibling.classList.add('active');
      }
    })
  }) */
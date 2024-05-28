
var mobileNav = document.querySelector('.js-mobile-nav');
if (mobileNav) {
  mobileNav.addEventListener('click', function (e) {
    var navItem = e.target.closest('.header__mobile-navigation-item');
    var sublist = navItem ? navItem.querySelector('.js-nav-sublist') : null;

    // Если клик был по ссылке и у этого элемента есть подменю, предотвращаем переход по ссылке
    if (e.target.tagName === 'A' && sublist) {
      e.preventDefault();

      // Закрытие всех других подменю, кроме текущего
      const openItems = mobileNav.querySelectorAll('.header__mobile-navigation-item.active');
      openItems.forEach(function (openItem) {
        if (openItem !== navItem) {
          openItem.classList.remove('active');
        }
      });

      // Переключаем класс 'active'
      navItem.classList.toggle('active');
    }
    // Если клик был не по ссылке, но элемент содержит подменю, тогда тоже переключаем 'active'
    else if (sublist) {
      e.preventDefault(); // Возможно, предотвращение перехода здесь уже не нужно, зависит от структуры

      // Аналогично закрываем другие подменю
      const openItems = mobileNav.querySelectorAll('.header__mobile-navigation-item.active');
      openItems.forEach(function (openItem) {
        if (openItem !== navItem) {
          openItem.classList.remove('active');
        }
      });

      navItem.classList.toggle('active');
    }
  });
} else {
  console.log('На странице нет кнопки меню');
};

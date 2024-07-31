document.addEventListener("DOMContentLoaded", function() {
  // Функция для установки отступа, основанная на высоте шапки
  function setInitialMainPadding() {
    const header = document.querySelector('header');
    const mainElement = document.querySelector('.main');

    if (header && mainElement) {
      const headerHeight = header.offsetHeight;
      mainElement.style.paddingTop = headerHeight + 'px';
    }
  }

  // Вызов функции для установки отступа сразу после загрузки DOM
  setInitialMainPadding();
});

document.addEventListener("DOMContentLoaded", function() {
  var accordions = document.querySelectorAll('.product-accordion');
  var activeClass = 'isActive';

  // Обработчик клика по аккордеону
  function accordionClickHandler() {
    var accordionBody = this.nextElementSibling;
    var isOpen = this.parentElement.classList.contains(activeClass);
    this.parentElement.classList.toggle(activeClass);
    accordionBody.style.display = isOpen ? 'none' : 'block';
  }

  // Добавление обработчиков событий
  function addEventListeners() {
    accordions.forEach(function(accordion, index) {
      var head = accordion.querySelector('.product-accordion__head');
      head.addEventListener('click', accordionClickHandler);
    });
    if (accordions.length > 0) {
      accordions[0].classList.add(activeClass);
      accordions[0].querySelector('.product-accordion__body').style.display = 'block';
    }
  }

  // Функция для инициализации аккордеонов в зависимости от ширины экрана
  function initializeAccordions() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth;
    if (screenWidth <= 767) {
      addEventListeners();
    }
  }

  // Инициализация аккордеонов при загрузке и при изменении размера окна
  initializeAccordions();
  window.addEventListener('resize', function() {
    initializeAccordions();
  });
});

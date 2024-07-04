
var buttonMenu = document.querySelector('#menu-btn');
if (buttonMenu) {
  // var navigation = document.querySelector('.navigation');
  // Если navigation тоже существует, назначаем обработчик событий
  // if (navigation) {
  buttonMenu.addEventListener('click', function () {
    buttonMenu.classList.toggle('isActive');
    // navigation.classList.toggle('isActive');
    document.body.classList.toggle('menu-open');
  });
  // }
} else {
  console.log('На странице нет кнопки меню');
};

// var buttonMenu = document.querySelectorAll('.js-menu-btn');
// if (buttonMenu) {
//   // var navigation = document.querySelector('.navigation');
//   // Если navigation тоже существует, назначаем обработчик событий
//   // if (navigation) {
//   buttonMenu.addEventListener('click', function () {
//     buttonMenu.classList.toggle('isActive');
//     // navigation.classList.toggle('isActive');
//     document.body.classList.toggle('menu-open');
//   });
//   // }
// } else {
//   console.log('На странице нет кнопки меню');
// };

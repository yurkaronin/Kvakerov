document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll('[data-tab-target]');
  const tabContents = document.querySelectorAll('[data-tab-content]');

  function hideAllTabs() {
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    });
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
  }

  function setupTabs() {
    if (window.innerWidth >= 768) { // Активация только при ширине экрана 768px и более
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const target = document.querySelector(tab.dataset.tabTarget);
          hideAllTabs();
          tab.classList.add('active');
          target.classList.add('active');
        });
      });

      // Активировать первый таб при загрузке
      tabs[0].click();
    }
  }

  setupTabs(); // Вызов setupTabs при загрузке

  // Реагировать на изменение размера окна
  window.addEventListener('resize', () => {
    hideAllTabs(); // Скрыть все табы при изменении размера окна
    setupTabs(); // Перенастроить табы при изменении размера окна
  });
});

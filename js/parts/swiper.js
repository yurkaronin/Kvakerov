document.addEventListener("DOMContentLoaded", function () {
  // Первый экран на главной hero-home__slider
  if (document.querySelector(".hero-home__slider")) {
    const swiper = new Swiper(".hero-home__slider .swiper", {
      // Optional parameters
      loop: true,
      speed: 600,
      parallax: true,
      autoplay: {
        delay: 25000,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".hero-home__slider .swiper-pagination",
        clickable: true,
      },
    });
  }

  // Слайдер с отзывами reviews__slider
  if (document.querySelector(".reviews__slider")) {
    const swiper = new Swiper(".reviews__slider .swiper", {
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 25000,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: ".reviews .swiper-button-next",
        prevEl: ".reviews .swiper-button-prev",
      },
    });
  }

  // Слайдер о компании с одним слайдом за раз
  if (document.querySelector(".about-slider")) {
    const swiper = new Swiper(".about-slider .swiper", {
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 25000,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: ".about-slider .swiper-button-next",
        prevEl: ".about-slider .swiper-button-prev",
      },
    });
  }

  // продукты сортировки
  if (document.querySelector(".js-product-slider")) {
    const swiper = new Swiper(".js-product-slider .swiper", {
      spaceBetween: 30,
      slidesPerView: "auto",
      loop: true,

      autoplay: {
        delay: 25000,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: ".js-product-slider .swiper-button-next",
        prevEl: ".js-product-slider .swiper-button-prev",
      },
    });
  }

  // Слайдер с логотипами партнёров
  if (document.querySelector(".partners__slider")) {
    console.log("Слайдер partners__slider ЕСТЬ");
    const swiper = new Swiper(".partners__slider .swiper", {
      loop: true,
      autoplay: {
        delay: 25000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".partners__slider .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".partners .swiper-button-next",
        prevEl: ".partners .swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        551: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      },
    });
  }

  // Слайдер с кастомными отзывами
  if (document.querySelector(".custom-review__slider")) {
    const swiper = new Swiper(".custom-review__slider .swiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 25000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".custom-review__slider .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".custom-review .swiper-button-next",
        prevEl: ".custom-review .swiper-button-prev",
      },
    });
  }

  // Слайдер с фотогалереей на всю ширину
  if (document.querySelector(".photo-slider")) {
    const swiper = new Swiper(".photo-slider .swiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 25000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".photo-slider .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".photo-slider .swiper-button-next",
        prevEl: ".photo-slider .swiper-button-prev",
      },
      breakpoints: {
        320: {
          spaceBetween: 16,
        },
        551: {
          spaceBetween: 20,
        },
        767: {
          spaceBetween: 30,
        },
        1024: {
          spaceBetween: 30,
        },
      },
    });
  }

  // Слайдер с карточками анонса товаров
  if (document.querySelector(".previews-slider")) {
    let swiper = new Swiper(".previews-slider .swiper", {
      loop: true,
      // freeMode: true,
      autoplay: {
        delay: 25000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".previews-slider .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".previews-slider .swiper-button-next",
        prevEl: ".previews-slider .swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        551: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 22,
        },
        1279: {
          slidesPerView: 3,
          spaceBetween: 22,
        },
      },
    });
  }

  // Слайдер с большими фото в карточке товаров
  if (document.querySelector(".js-product-card-slider")) {
    var swiper = new Swiper(".js-product-card-slider", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 25000,
        disableOnInteraction: false,
      },
    });

    // Получение всех миниатюр
    var thumbnails = document.querySelectorAll(".card-thumbnails__link");
    var activeClass = "isActive"; // Название активного класса

    // Функция для обновления активного класса на миниатюрах
    function updateActiveThumbnail() {
      thumbnails.forEach(function (thumbnail, index) {
        if (index === swiper.realIndex) {
          // swiper.realIndex учитывает loop в swiper
          thumbnail.classList.add(activeClass);
        } else {
          thumbnail.classList.remove(activeClass);
        }
      });
    }

    // Добавление обработчика клика на каждую миниатюру
    thumbnails.forEach(function (thumbnail, index) {
      thumbnail.addEventListener("click", function (e) {
        e.preventDefault();
        swiper.slideTo(index); // Переключение слайдера на индекс, соответствующий миниатюре
      });
    });

    // Обработчик события 'slideChange' для Swiper
    swiper.on("slideChange", function () {
      updateActiveThumbnail(); // Обновление активного класса при смене слайда
    });

    // Инициализация активного класса при загрузке страницы
    updateActiveThumbnail();
  }
});

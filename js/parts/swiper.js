document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".hero-home__slider")) {
    console.log("Слайдер hero-home__slider ЕСТЬ");

    // const progressCircle = document.querySelector(".hero-home__slider .autoplay-progress svg");
    // const progressContent = document.querySelector(".hero-home__slider .autoplay-progress span");

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
  } else {
    console.log("Слайдера hero-home__slider НЕТ");
  }

  // Слайдер с отзывами reviews__slider
  if (document.querySelector(".reviews__slider")) {
    console.log("Слайдер reviews__slider ЕСТЬ");

    const swiper = new Swiper(".reviews__slider .swiper", {
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 25000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".reviews__slider .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".reviews .swiper-button-next",
        prevEl: ".reviews .swiper-button-prev",
      },
    });
  } else {
    console.log("Слайдера reviews__slider НЕТ");
  }

  // Слайдер с логотипами партнёров
  if (document.querySelector(".partners__slider")) {
    console.log("Слайдер partners__slider ЕСТЬ");
    const swiper = new Swiper(".partners__slider .swiper", {
      slidesPerView: 6,
      spaceBetween: 30,
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
    });
  } else {
    console.log("Слайдера reviews__slider НЕТ");
  }

  // Слайдер с кастомными отзывами
  if (document.querySelector(".custom-review__slider")) {
    console.log("Слайдер custom-review__slider ЕСТЬ");
    const swiper = new Swiper(".custom-review__slider .swiper", {
      slidesPerView: 2,
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
        nextEl: ".custom-review__slider .swiper-button-next",
        prevEl: ".custom-review__slider .swiper-button-prev",
      },
    });
  } else {
    console.log("Слайдера custom-review__slider НЕТ");
  }

  // Слайдер с фотогалереей на всю ширину
  if (document.querySelector(".photo-slider")) {
    console.log("Слайдер photo-slider ЕСТЬ");
    const swiper = new Swiper(".photo-slider .swiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      autoHeight: true,
      loop: true,
      freeMode: true,
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
    });
  } else {
    console.log("Слайдера photo-slider НЕТ");
  }

  // Слайдер с карточками анонса товаров
  if (document.querySelector(".previews-slider")) {
    console.log("Слайдер previews-slider ЕСТЬ");
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
      // Responsive breakpoints
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
          spaceBetween: 32,
        },
      },
    });
  }
});

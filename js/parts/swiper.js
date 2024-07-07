document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.hero-home__slider')) {

    console.log('Слайдер hero-home__slider ЕСТЬ');

    // const progressCircle = document.querySelector(".hero-home__slider .autoplay-progress svg");
    // const progressContent = document.querySelector(".hero-home__slider .autoplay-progress span");

    const swiper = new Swiper('.hero-home__slider .swiper', {
      // Optional parameters
      loop: true,
      speed: 600,
      parallax: true,
      autoplay: {
        delay: 25000,
        disableOnInteraction: true
      },
      pagination: {
        el: ".hero-home__slider .swiper-pagination",
        clickable: true
      },


    });
  } else {
    console.log('Слайдера hero-home__slider НЕТ');
  };

  // Слайдер с отзывами reviews__slider
  if(document.querySelector('.reviews__slider')) {
    console.log('Слайдер reviews__slider ЕСТЬ');

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
    console.log('Слайдера reviews__slider НЕТ');
  }


});

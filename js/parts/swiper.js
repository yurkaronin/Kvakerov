document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.hero-home__slider')) {

    console.log('Слайдер hero-home__slider ЕСТЬ');

    // const progressCircle = document.querySelector(".hero-home__slider .autoplay-progress svg");
    // const progressContent = document.querySelector(".hero-home__slider .autoplay-progress span");

    const swiper = new Swiper('.hero-home__slider .swiper', {
      // Optional parameters
      loop: true,
      // slidesPerView: 1,
      // spaceBetween: 30,
      // effect: "fade",
      speed: 600,
      parallax: true,
      // centeredSlides: true,

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
  }


});

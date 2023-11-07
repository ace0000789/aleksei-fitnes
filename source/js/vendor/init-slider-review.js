//СЛАЙДЕР
function initSliderReview() {
  const myImageSlider = new Swiper('[data-validate="swiper-container-review"]', {
    //Стрелки
      navigation: {
        nextEl: '[data-validate="button-next-review"]',
        prevEl: '[data-validate="button-prev-review"]',
      },

      //чувствительность свайпа
      touchRatio: 1,
      //угол срабатывания свайпа
      touchAngle: 45,
      //курсор перетаскивания
      grabCursor: true,

      //Управление клавиатурой
      keyboard: {
        // вкл/выкл
        enbled: true,
        // вкл/выкл только когда слайдер в пределах вьюпорта
        onlyInVIewport: true,
      },

      //Автовысота картинки
      autoHeight: true,
      //Бесконечный слайдер
      loop: false,
      //Количнство дублирущих слайдов
      loopedSlides: 0,
      // Свободный режим (перетаскивание по 1 фрагменту)
      freeMod: true,
      // Скорость переклдючения слайда
      speed: 500,
      // Листание
      effect: 'slide',
      breakpoints: {
        1366: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          centeredSlides: false,
          spaceBetween: 60,
          allowTouchMove: false,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 32,
          initialSlide: 2,
          allowTouchMove: true,
        },

        0: {
          slidesPerView: 1,
          spaceBetween: 40,
          spaceBetween: 0,
          initialSlide: 2,
        },
      }
    });
  }
  export {initSliderReview};

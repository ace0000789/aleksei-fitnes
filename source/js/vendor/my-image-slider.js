//СЛАЙДЕР
function initSlider() {
const myImageSlider = new Swiper('[data-validate="swiper-container"]', {
  //Стрелки
    navigation: {
      nextEl: '[data-validate="button-next"]',
      prevEl: '[data-validate="button-prev"]',
    },

    //перетаскивание на ПК
    simulateTouch: true,
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
    loop: true,
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
        slidesPerView: 4,
        slidesPerGroup: 1,
        centeredSlides: false,
        spaceBetween: 40,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 11,
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
export {initSlider};

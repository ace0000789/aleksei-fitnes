//СЛАЙДЕР
function initSlider() {
const myImageSlider = new Swiper('.slider__container', {
  //Стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
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
      320: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        centeredSlides: true,
        spaceBetween: 50,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        centeredSlides: false,
        spaceBetween: 30,
        initialSlide: 2,
      },
      1366: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        centeredSlides: false,
        spaceBetween: 40,
      },
    }
  });
}
export {initSlider};

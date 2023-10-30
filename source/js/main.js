import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)


// Видео

let buttonVideo = document.querySelector('.about-us__video-button');
let container = document.querySelector('.about-us__video');

buttonVideo.addEventListener('click', function () {

  if (buttonVideo.classList.contains('ready')) {
    return;
  }

  buttonVideo.classList.add('ready');
  container.innerHTML = '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?si=VTjj2qUjkgYfiWLC&amp;autoplay=1" preload="auto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

  buttonVideo.style.display = 'none';
});

// Абонементы
const buttonsPeriod = document.querySelectorAll('.subscription__period-button');
const prices = document.querySelectorAll('.subscription__plan-price ');
const fadedPrices = document.querySelectorAll('.tabsfaded-price');

const pricesPerPeriod = [
  // Цены для 1 месяца (остаются неизменными)
  [5000, 1700, 2700],

  // Цены для 6 месяцев (1-я, 2-я и 3-я карточки соответственно)
  [30000, 10200, 16200],

  // Цены для 12 месяцев (1-я, 2-я и 3-я карточки соответственно)
  [60000, 20400, 32400]
];

document.addEventListener('DOMContentLoaded', function() {

  buttonsPeriod[0].classList.add('subscription__period-button--active');

  buttonsPeriod.forEach((button, index) => {
    button.addEventListener('click', handleButtonClick.bind(null, index));

  });

  function handleButtonClick(index) {
    updatePrices(index);
    updateButtons(index);
  }

  function updatePrices(index) {

    prices.forEach((price, idx) => {
      price.textContent = pricesPerPeriod[index][idx];
    });

    fadedPrices.forEach((fadedPrice, idx) => {
      fadedPrice.textContent = pricesPerPeriod[index][idx];
    });
  }

  function updateButtons(index, activeButton) {
    buttonsPeriod.forEach((btn) => {
      btn.classList.remove('subscription__period-button--active');
    });

    activeButton.classList.add('subscription__period-button--active');
  }

});

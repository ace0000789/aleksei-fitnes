import {Form} from './modules/form-validate/form';
import {initVideo} from './init-video';
import {initTabsSubscription} from './init-tabs-subscription';
import {initSliderJury} from './init-slider-jury';
import {initAccordions} from './init-accordion';
import {initTabsFaq} from './init-tabs';
import {initClickElementAccordion} from './init-click-element-accordion';
import {initSliderReview} from './init-slider-review';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Modules
  // ---------------------------------
  initVideo();
  initTabsSubscription();
  initSliderJury();
  initAccordions();
  initClickElementAccordion();
  initTabsFaq();
  initSliderReview();

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

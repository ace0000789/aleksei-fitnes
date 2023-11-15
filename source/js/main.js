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

  initVideo();
  initTabsSubscription();
  initSliderJury();
  initAccordions();
  initClickElementAccordion();
  initTabsFaq();
  initSliderReview();

  window.addEventListener('load', () => {

    const form = new Form();
    window.form = form;
    form.init();
  });
});

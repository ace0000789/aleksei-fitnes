export function initTabsSubscription() {
  const buttonsPeriod = document.querySelectorAll('[data-validate="period-tab"]');
  const pricesPeriod = document.querySelectorAll('[data-validate="price"]');
  const shadowPrices = document.querySelectorAll('[data-validate="shadow"]');

  const pricesProgram = [
    [5000, 1700, 2700],
    [25000, 8500, 13500],
    [50000, 16000, 25000]
  ];

  buttonsPeriod[0].classList.add('is-active-subscription');
  buttonsPeriod.forEach((button, index) => {
    button.addEventListener('click', () => {

      pricesPeriod.forEach((price, idx) => {
        price.textContent = pricesProgram[index][idx];
      });

      shadowPrices.forEach((fadedPrice, idx) => {
        fadedPrice.textContent = pricesProgram[index][idx];
      });

      buttonsPeriod.forEach((btn) => {
        btn.classList.remove('is-active-subscription');
      });

      button.classList.add('is-active-subscription');
    });
  });
}

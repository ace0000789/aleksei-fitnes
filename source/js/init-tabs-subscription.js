export function initTabsSubscription() {
  const buttonsPeriod = document.querySelectorAll('[data-validate="period-tab"]');
  const prices = document.querySelectorAll('[data-validate="price"]');
  const fadedPrices = document.querySelectorAll('[data-validate="shadow"]');

  const pricesPerPeriod = [
    [5000, 1700, 2700],
    [25000, 8500, 13500],
    [50000, 16000, 25000]
  ];

  buttonsPeriod[0].classList.add('is-active-subscription');
  buttonsPeriod.forEach((button, index) => {
    button.addEventListener('click', () => {

      prices.forEach((price, idx) => {
        price.textContent = pricesPerPeriod[index][idx];
      });

      fadedPrices.forEach((fadedPrice, idx) => {
        fadedPrice.textContent = pricesPerPeriod[index][idx];
      });

      buttonsPeriod.forEach((btn) => {
        btn.classList.remove('is-active-subscription');
      });

      button.classList.add('is-active-subscription');
    });
  });
}

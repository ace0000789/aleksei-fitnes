export function initTabsSubscription() {
  const buttonsPeriod = document.querySelectorAll('[data-validate="period-tab"]');
  const prices = document.querySelectorAll('[data-validate="price"]');
  const fadedPrices = document.querySelectorAll('[data-validate="shadow"]');

  const pricesPerPeriod = [
    // Цены для 1 месяца (остаются неизменными)
    [5000, 1700, 2700],

    // Цены для 6 месяцев (1-я, 2-я и 3-я карточки соответственно)
    [30000, 10200, 16200],

    // Цены для 12 месяцев (1-я, 2-я и 3-я карточки соответственно)
    [60000, 20400, 32400]
  ];

  buttonsPeriod[0].classList.add('is-active-subscription');
    buttonsPeriod.forEach((button, index) => {
      button.addEventListener('click', function () {

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

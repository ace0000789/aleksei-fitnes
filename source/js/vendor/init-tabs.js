export function initTabs() {
  const buttonsPeriod = document.querySelectorAll('.subscription__period-button');
  const prices = document.querySelectorAll('.subscription__plan-price ');
  const fadedPrices = document.querySelectorAll('.subscription__plan-shadow');

  const pricesPerPeriod = [
    // Цены для 1 месяца (остаются неизменными)
    [5000, 1700, 2700],

    // Цены для 6 месяцев (1-я, 2-я и 3-я карточки соответственно)
    [30000, 10200, 16200],

    // Цены для 12 месяцев (1-я, 2-я и 3-я карточки соответственно)
    [60000, 20400, 32400]
  ];

  buttonsPeriod[0].classList.add('subscription__period-button--active');
    buttonsPeriod.forEach((button, index) => {
      button.addEventListener('click', function () {

        prices.forEach((price, idx) => {
          price.textContent = pricesPerPeriod[index][idx];
        });

        fadedPrices.forEach((fadedPrice, idx) => {
          fadedPrice.textContent = pricesPerPeriod[index][idx];
        });

        buttonsPeriod.forEach((btn) => {
          btn.classList.remove('subscription__period-button--active');
        });

        button.classList.add('subscription__period-button--active');
      });
    });
}

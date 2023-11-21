const infoItem = document.querySelectorAll('.faq__info-item');

export function initClickElementAccordion() {

  if (!infoItem || infoItem.length === 0) {
    return;
  }

  infoItem.forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.target.classList.contains('faq__info-button')) {
        return;
      }
      const buttons = el.querySelectorAll('.faq__info-button');
      buttons.forEach((button) => {
        button.click();
      });
    });
  });
}

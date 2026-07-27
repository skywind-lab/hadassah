// const rangeInput = document.getElementById("range");
// const priceDisplay = document.getElementById("current-price");

// rangeInput.addEventListener("input", (e) => {
//   priceDisplay.textContent = `€${e.target.value}`;
// });

document.addEventListener("DOMContentLoaded", () => {
  const priceInput = document.getElementById("range");
  const priceDisplay = document.getElementById("current-price");
  const productCards = document.querySelectorAll(".product-card");

  if (!priceInput || !priceDisplay) return;

  // 1. Функция обновления цифры под слайдером (срабатывает мгновенно)
  function updatePriceDisplay(val) {
    priceDisplay.textContent = `€${val}`;
  }

  // 2. Функция фильтрации карточек товаров
  function filterProducts(maxPrice) {
    productCards.forEach((card) => {
      // Получаем цену конкретной карточки из data-price
      const cardPrice = Number(card.dataset.price);

      // Сравниваем цену товара с выбранным значением бегунка
      if (cardPrice <= maxPrice) {
        card.style.display = ""; // Показываем товар
      } else {
        card.style.display = "none"; // Скрываем товар
      }
    });
  }

  // Пока пользователь тянет бегунок — меняем цифру на экране
  priceInput.addEventListener("input", (e) => {
    updatePriceDisplay(e.target.value);
  });

  // Когда пользователь отпустил бегунок — фильтруем список
  priceInput.addEventListener("change", (e) => {
    const selectedPrice = Number(e.target.value);
    filterProducts(selectedPrice);
  });

  // Инициализация при первой загрузке страницы
  updatePriceDisplay(priceInput.value);
});

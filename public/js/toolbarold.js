function sortProducts(criteria) {
  const grid = document.querySelector(".product-grid");
  // Превращаем HTMLCollection карточек в обычный массив JS
  const cards = Array.from(grid.querySelectorAll(".product-card"));

  cards.sort((a, b) => {
    const priceA = parseFloat(a.dataset.price);
    const priceB = parseFloat(b.dataset.price);

    if (criteria === "price-low") {
      return priceA - priceB; // От дешевых к дорогим
    }
    if (criteria === "price-high") {
      return priceB - priceA; // От дорогих к дешевым
    }
    if (criteria === "popular") {
      return a.dataset.popular - b.dataset.popular; // По популярности
    }
    return 0;
  });

  // Очищаем сетку и вставляем карточки в новом порядке
  grid.innerHTML = "";
  cards.forEach((card) => grid.appendChild(card));
}

// Вызываем эту функцию внутри клика по пункту выпадающего списка:
// sortProducts(option.dataset.value);

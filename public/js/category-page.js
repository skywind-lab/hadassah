document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("[data-category-page]");
  if (!grid) return;

  const category = grid.dataset.categoryPage;
  const categoryProducts = products.filter(
    (item) => item.category === category,
  );

  grid.innerHTML = categoryProducts.map(createProductCard).join("");
});

// Этот скрипт тоже генерит что-то связанное с карточкой товара, потом напишу что конкретно

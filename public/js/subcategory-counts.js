document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll("[data-subcategory]");
  if (counters.length === 0) return;

  counters.forEach((counter) => {
    const subcategory = counter.dataset.subcategory;
    const count = products.filter(
      (item) => item.subcategory === subcategory,
    ).length;

    counter.textContent = `${count} products`;
  });
});

// Этот скрипт считает по субкатегориям карточки

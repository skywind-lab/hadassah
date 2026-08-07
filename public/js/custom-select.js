document.addEventListener("DOMContentLoaded", () => {
  const customSelect = document.getElementById("sortSelect");
  if (!customSelect) return;

  const selectBtn = customSelect.querySelector(".custom-select__button");
  const selectedValue = customSelect.querySelector(".custom-select__value");
  const options = customSelect.querySelectorAll(".custom-select__option");

  // Переключение открытия/закрытия
  selectBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    customSelect.classList.toggle("is-open");
  });

  // Выбор варианта
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selectedValue.textContent = option.textContent;

      options.forEach((opt) => opt.classList.remove("is-active"));
      option.classList.add("is-active");

      customSelect.classList.remove("is-open");
    });
  });

  // Закрытие при клике мимо выпадашки
  document.addEventListener("click", () => {
    customSelect.classList.remove("is-open");
  });
});

// Этот скрипт делает выпадающую выбиралку в каталоге над блоком с продуктами

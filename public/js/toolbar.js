document.addEventListener("DOMContentLoaded", () => {
  const customSelect = document.getElementById("sortSelect");
  if (!customSelect) return;

  const selectBtn = customSelect.querySelector(".select-button");
  const selectedValue = customSelect.querySelector(".selected-value");
  const options = customSelect.querySelectorAll(".option");

  // Переключение открытия/закрытия
  selectBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    customSelect.classList.toggle("is-open");
  });

  // Выбор варианта
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selectedValue.textContent = option.textContent;

      options.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");

      customSelect.classList.remove("is-open");
    });
  });

  // Закрытие при клике мимо выпадашки
  document.addEventListener("click", () => {
    customSelect.classList.remove("is-open");
  });
});

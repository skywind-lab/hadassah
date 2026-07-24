document.addEventListener("DOMContentLoaded", () => {
  const customSelect = document.getElementById("customSelect");
  const selectBtn = customSelect.querySelector(".select-button");
  const selectedValue = customSelect.querySelector(".selected-value");
  const options = customSelect.querySelectorAll(".option");

  // 1. Открытие/закрытие списка по клику на кнопку
  selectBtn.addEventListener("click", () => {
    customSelect.classList.toggle("is-open");
  });

  // 2. Выбор пункта списка
  options.forEach((option) => {
    option.addEventListener("click", () => {
      // Обновляем текст на кнопке
      selectedValue.textContent = option.textContent;

      // Переключаем активный класс
      options.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");

      // Закрываем выпадашку
      customSelect.classList.remove("is-open");

      // Здесь можно вызвать функцию сортировки, например:
      // sortProducts(option.dataset.value);
    });
  });

  // 3. Закрытие списка при клике вне элемента
  document.addEventListener("click", (event) => {
    if (!customSelect.contains(event.target)) {
      customSelect.classList.remove("is-open");
    }
  });
});

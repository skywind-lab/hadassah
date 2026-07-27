document.addEventListener("DOMContentLoaded", () => {
  const paginations = document.querySelectorAll(".pagination");

  paginations.forEach((pagination) => {
    const links = pagination.querySelectorAll(".pagination__link");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((l) => l.classList.remove("is-active"));
        link.classList.add("is-active");

        // Здесь позже добавите логику подгрузки/показа нужной страницы товаров,
        // например по данным из link.textContent или data-атрибута
      });
    });
  });
});

// Что дальше, когда придёт время подключать реальные данные
// Пока это просто визуальное переключение активной кнопки без
// реальной смены контента. Когда дойдёте до вывода товаров с
// сервера/JSON — на каждую кнопку стоит добавить data-page="1",
// data-page="2" и т.д., чтобы JS знал, какую именно страницу
// подгружать/показывать по клику. Дайте знать, когда до этого
// дойдёте — помогу состыковать.

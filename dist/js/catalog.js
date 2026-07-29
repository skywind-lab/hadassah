function createProductCard(product) {
  return `
    <li class="product-card catalog-section__card" data-price="${product.price}" data-category="${product.category}">
      <div class="product-card__image-wrap">
        <picture>
          <source srcset="${product.imageWebp}" type="image/webp" />
          <img src="${product.imageJpg}" alt="${product.alt}" class="product-card__image" />
        </picture>
        <a href="#" class="product-card__overlay-link">View Details</a>
      </div>

      <div class="product-card__content">
        <p class="mini-text product-card__category">${product.categoryLabel}</p>
        <p class="card-title product-card__title">${product.title}</p>
        <p class="product-card__description">${product.description}</p>
        <div class="product-card__footer">
          <p class="product-card__price">€${product.price}</p>
          <button class="card-text-green product-card__btn" type="button">Add to Cart</button>
        </div>
      </div>
    </li>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".catalog-section__product-grid");
  const paginationList = document.querySelector(".pagination__list");
  const priceInput = document.getElementById("range");
  const priceDisplay = document.getElementById("current-price");

  const perPage = 8;
  let currentPage = 1;
  let filteredProducts = [...products]; // Храним отфильтрованные товары

  // 1. Обновление текста под ползунком
  function updatePriceDisplay(val) {
    if (priceDisplay) {
      priceDisplay.textContent = `€${val}`;
    }
  }

  // 2. Рендер товаров для текущей страницы
  function renderPage(pageNumber) {
    currentPage = pageNumber;
    const start = (pageNumber - 1) * perPage;
    const pageItems = filteredProducts.slice(start, start + perPage);

    if (pageItems.length === 0) {
      grid.innerHTML = `<li class="no-products">No products found in this price range.</li>`;
      return;
    }

    grid.innerHTML = pageItems.map(createProductCard).join("");
  }

  // 3. Рендер пагинации (пересчитывается под отфильтрованный список)
  function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / perPage);
    paginationList.innerHTML = "";

    if (totalPages <= 1) return; // Скрываем пагинацию, если всего 1 страница или меньше

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.classList.add("pagination__item");

      const button = document.createElement("button");
      button.type = "button";
      button.classList.add("pagination__link");
      button.textContent = i;
      if (i === currentPage) button.classList.add("is-active");

      button.addEventListener("click", () => {
        document
          .querySelectorAll(".pagination__link")
          .forEach((btn) => btn.classList.remove("is-active"));
        button.classList.add("is-active");
        renderPage(i);
      });

      li.appendChild(button);
      paginationList.appendChild(li);
    }
  }

  // 4. Главная функция фильтрации
  function applyFilter(maxPrice) {
    // Фильтруем исходный массив
    filteredProducts = products.filter((item) => item.price <= maxPrice);

    // Сбрасываем на 1-ю страницу и перерисовываем всё
    renderPagination();
    renderPage(1);
  }

  // Настройка ползунка
  if (priceInput) {
    // При движении ползунка — меняем только цифру
    priceInput.addEventListener("input", (e) => {
      updatePriceDisplay(e.target.value);
    });

    // Когда пользователь отпустил ползунок — фильтруем
    priceInput.addEventListener("change", (e) => {
      applyFilter(Number(e.target.value));
    });

    // Инициализация стартовой цены при загрузке
    updatePriceDisplay(priceInput.value);
  }

  // Первоначальный рендер
  renderPagination();
  renderPage(1);
});

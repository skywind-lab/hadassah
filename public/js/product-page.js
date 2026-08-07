document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = Number(urlParams.get("id"));
  const product = products.find((item) => item.id === productId);

  const container = document.querySelector(".product-page__container");
  if (!container) return;

  if (!product) {
    container.innerHTML = "<p>Product not found.</p>";
    return;
  }

  container.innerHTML = `
    <div class="product-page__image-wrap">
      <picture>
        <source srcset="${product.imageWebp}" type="image/webp" />
        <img src="${product.imageJpg}" alt="${product.alt}" class="product-page__image" />
      </picture>
    </div>
    <div class="product-page__content">
      <p class="product-page__category">${product.categoryLabel}</p>
      <h1 class="product-page__title">${product.title}</h1>
      <p class="product-page__description">${product.description}</p>
      <p class="product-page__price">€${product.price}</p>
      <button class="product-page__btn" type="button" data-id="${product.id}">Add to Cart</button>
    </div>
  `;

  document.title = product.title;
});

// Этот скрипт рисует страницу продукта

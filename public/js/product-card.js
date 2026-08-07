function createProductCard(product) {
  return `
    <li class="product-card catalog-section__card" data-price="${product.price}" data-category="${product.category}">
      <div class="product-card__image-wrap">
        <picture>
          <source srcset="${product.imageWebp}" type="image/webp" />
          <img src="${product.imageJpg}" alt="${product.alt}" class="product-card__image" />
        </picture>
        <a href="product.html?id=${product.id}" class="product-card__overlay-link">View Details</a>
      </div>
      <div class="product-card__content">
        <p class="mini-text product-card__category">${product.categoryLabel}</p>
        <p class="card-title product-card__title">${product.title}</p>
        <p class="product-card__description">${product.description}</p>
        <div class="product-card__footer">
          <p class="product-card__price">€${product.price}</p>
          <button class="card-text-green product-card__btn" type="button" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    </li>
  `;
}

// Это генератор карточки товара для страниц не от каталога, а просто тематических

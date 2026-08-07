function getCart() {
  const cart = localStorage.getItem("hadassah_cart");
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem("hadassah_cart", JSON.stringify(cart));
  updateCartIcon();
}

function addToCart(productId) {
  const cart = getCart();
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart(cart);
}

function updateCartIcon() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const badge = document.querySelector(".header__cart-count");
  if (badge) {
    badge.textContent = totalCount > 0 ? totalCount : "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartIcon();

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-id]");
    if (btn && btn.textContent.trim() === "Add to Cart") {
      const productId = Number(btn.dataset.id);
      addToCart(productId);
    }
  });
});

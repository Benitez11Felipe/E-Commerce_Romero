export const addToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const productIndex = cart.findIndex((item) => item.id === product.id);

  if (productIndex !== -1) {
    cart[productIndex].quantity += product.quantity;
  } else {
    cart.push({ ...product });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  return true;
};

export const clearCart = () => {
  localStorage.removeItem("cart");
  return [];
};

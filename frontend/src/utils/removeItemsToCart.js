const removeItemsToCart = (cartItems, itemToRemove) => {
  const initialItems = cartItems.map(item =>
    item.id === itemToRemove.id ? { ...item, qty: item.qty - 1 } : item
  );

  return initialItems.filter(item => item.qty > 0);
};

export default removeItemsToCart;

import CartContext from './cart-context';

const CartProvider = ({ children }) => {
  const addItem = (item) => {};
  const removeItem = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

import { createContext, useContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  empty: () => {},
});

export const useCartContext = () => useContext(CartContext);

export default CartContext;

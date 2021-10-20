import { useReducer } from 'react';
import { ADD_ITEM, REMOVE_ITEM } from './ActionTypes';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, { type, payload }) => {
  if (type === ADD_ITEM) {
    const items = state.items.concat(payload);
    const totalAmount = state.totalAmount + payload.price * payload.amount;

    return {
      items,
      totalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItem = (item) => {
    dispatchCartAction({
      type: ADD_ITEM,
      payload: item,
    });
  };
  const removeItem = (id) => {
    dispatchCartAction({
      type: REMOVE_ITEM,
      payload: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

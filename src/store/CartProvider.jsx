import { useReducer } from 'react';
import { ADD_ITEM, REMOVE_ITEM } from './ActionTypes';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, { type, payload }) => {
  if (type === ADD_ITEM) {
    let items;
    const totalAmount = state.totalAmount + payload.price * payload.amount;

    const index = state.items.findIndex((item) => item.id === payload.id);
    const existingItem = state.items[index];
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + payload.amount,
      };
      items = [...state.items];
      items[index] = updatedItem;
    } else {
      items = state.items.concat(payload);
    }

    return {
      items,
      totalAmount,
    };
  }

  if (type === REMOVE_ITEM) {
    let items;
    const index = state.items.findIndex((item) => item.id === payload);
    const existingItem = state.items[index];
    let totalAmount = state.totalAmount - existingItem.price;

    if (existingItem.amount === 1) {
      items = state.items.filter((item) => item.id !== payload);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      items = [...state.items];
      items[index] = updatedItem;
    }

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

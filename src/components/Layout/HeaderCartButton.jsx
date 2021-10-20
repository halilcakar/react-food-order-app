import React from 'react';
import classes from './HeaderCartButton.module.css';

import CartIcon from '../Cart/CartIcon';
import { useCartContext } from '../../store/cart-context';

const HeaderCartButton = ({ onClick }) => {
  const cartContext = useCartContext();

  const numberOfCartItems = cartContext.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

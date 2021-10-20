import { useState, useEffect } from 'react';
import classes from './HeaderCartButton.module.css';

import CartIcon from '../Cart/CartIcon';
import { useCartContext } from '../../store/cart-context';

const HeaderCartButton = ({ onClick }) => {
  const [isLight, setIsLight] = useState(false);
  const context = useCartContext();

  const { items } = context;
  const numberOfCartItems = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${isLight ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setIsLight(true);

    const id = setTimeout(() => setIsLight(false), 300);

    return () => clearTimeout(id);
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

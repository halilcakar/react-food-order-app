import { useCartContext } from '../../store/cart-context';
import classes from './Cart.module.css';

import Modal from '../UI/Modal';
import CartItem from './CartItem';

const Cart = ({ onClose }) => {
  const context = useCartContext();

  const totalAmount = context.totalAmount.toFixed(2);
  const hasItems = context.items.length > 0;

  const cartItemAddHandler = (item) => {
    context.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    context.removeItem(id);
  };

  const cartitems = (
    <ul className={classes['cart-items']}>
      {context.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const handleOrder = () => {
    console.log('Ordering...');
  };

  return (
    <Modal onClose={onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onClose} className={classes['button--alt']}>
          Close
        </button>
        {hasItems && (
          <button onClick={handleOrder} className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;

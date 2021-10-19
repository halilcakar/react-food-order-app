import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = ({ onClose }) => {
  const cartitems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(
        (item, index) => (
          <li key={index}>{item.name}</li>
        )
      )}
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
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onClose} className={classes['button--alt']}>
          Close
        </button>
        <button onClick={handleOrder} className={classes.button}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;

import { useRef } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = ({ id, onAddToCart }) => {
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const amount = +inputRef.current.value;
    if (amount < 1 || amount > 5) {
      return;
    }

    onAddToCart(amount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;

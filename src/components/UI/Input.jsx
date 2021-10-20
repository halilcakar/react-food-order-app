import { forwardRef } from 'react';
import classes from './Input.module.css';

const Input = forwardRef(({ label, input }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} type="text" {...input} />
    </div>
  );
});

export default Input;

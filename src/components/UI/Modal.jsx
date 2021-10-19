import classes from './Modal.module.css';

import { createPortal } from 'react-dom';

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const element = document.getElementById('overlays');
const Modal = ({ children }) => {
  return (
    <>
      {createPortal(<Backdrop />, element)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, element)}
    </>
  );
};

export default Modal;

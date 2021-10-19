import classes from './Modal.module.css';

import { createPortal } from 'react-dom';

const Backdrop = ({ onClose }) => {
  return <button onClick={onClose} className={classes.backdrop}></button>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const element = document.getElementById('overlays');
const Modal = ({ onClose, children }) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, element)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, element)}
    </>
  );
};

export default Modal;

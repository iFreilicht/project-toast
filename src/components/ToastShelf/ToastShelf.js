import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant, handleClose }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} text={message} handleClose={handleClose} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ id, message, variant, handleClose }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} text={message} handleClose={handleClose} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

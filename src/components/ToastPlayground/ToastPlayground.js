import React from 'react';

import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastPlayground() {
  const { addToast } = React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <ToastShelf />
      <button
        onClick={(e) => { addToast("message"); }}
      >
        Pop Toast!
      </button>
    </div>
  );
}

export default ToastPlayground;

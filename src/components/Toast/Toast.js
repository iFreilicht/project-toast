import React from 'react';

import styles from './Toast.module.css';

function Toast({text}) {
  return (
    <div className={`${styles.toast} ${styles.notice}`}>
      <p className={styles.content}>
        {text}
      </p>
    </div>
  );
}

export default Toast;

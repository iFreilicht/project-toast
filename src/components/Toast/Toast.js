import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

const STYLE_BY_VARIANT = {
  notice: styles.notice,
  warning: styles.warning,
  success: styles.success,
  error: styles.error
}

function Toast({text, variant, handleClose}) {
  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${STYLE_BY_VARIANT[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {text}
      </p>
      <button
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;

import React from 'react';
import { ErrorIcon } from '../icons';
import styles from './ErrorMessage.module.scss';

function ErrorMessage(): JSX.Element {
  return (
    <div className={styles.errorMessage}>
      <ErrorIcon className={styles.icon} />
      <div className={styles.message}>Oops! Something went wrong.</div>
    </div>
  );
}

export default ErrorMessage;

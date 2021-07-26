import React from 'react';
import styles from './Tag.module.scss';

export interface TagProps {
  children?: React.ReactNode;
}

function Tag({ children }: TagProps): JSX.Element {
  return <span className={styles.tag}>#{children}</span>;
}

export default Tag;

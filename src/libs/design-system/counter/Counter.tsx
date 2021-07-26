import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.scss';

export interface CounterProps {
  icon: React.ReactNode;
  value: number;
  className?: string;
}

function Counter({ icon, value, className }: CounterProps): JSX.Element {
  return (
    <span className={`${styles.counter} ${className ?? ``}`}>
      {icon}
      <span className={styles.value}>{value}</span>
    </span>
  );
}

Counter.propTypes = {
  icon: PropTypes.node.isRequired,
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Counter.defaultProps = {
  className: undefined,
};

export default Counter;

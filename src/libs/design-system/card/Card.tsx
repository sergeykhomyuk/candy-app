import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

export interface CardProps {
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  children?: React.ReactNode;
}

function Card({
  imageSrc,
  imageAlt,
  children,
  className,
}: CardProps): JSX.Element {
  return (
    <div
      className={`${styles.card} ${className ?? ''} ${
        !imageSrc ? styles.simpleCard : ''
      }`}
    >
      {imageSrc && (
        <img className={styles.cardImage} src={imageSrc} alt={imageAlt ?? ''} />
      )}
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
};

Card.defaultProps = {
  imageSrc: undefined,
  imageAlt: undefined,
  className: undefined,
};

export default Card;

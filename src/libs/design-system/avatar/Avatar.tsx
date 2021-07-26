import React from 'react';
import PropTypes from 'prop-types';

import styles from './Avatar.module.scss';

export interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

function Avatar({ src, alt, className }: AvatarProps): JSX.Element {
  return (
    <img
      src={src}
      alt={alt}
      className={`${styles.avatar} ${className ?? ''}`}
    />
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  className: undefined,
};

export default Avatar;

import React from 'react';
import Counter from 'src/libs/design-system/counter';
import {
  GridViewIcon,
  NotificationsIcon,
  PlusIcon,
  SearchIcon,
} from 'src/libs/design-system/icons';
import styles from './Footer.module.scss';

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.quickActions}>
        <SearchIcon />
        <GridViewIcon />
        <Counter
          icon={<NotificationsIcon />}
          value={1}
          className={styles.notifications}
        />
      </div>

      <div>
        <button type="button" className={styles.addItem}>
          <PlusIcon />
        </button>
      </div>
    </footer>
  );
}

export default Footer;

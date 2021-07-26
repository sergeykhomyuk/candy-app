import React from 'react';
import Avatar from 'src/libs/design-system/avatar';
import {
  BackIcon,
  MoreIcon,
  ShareIcon,
  SortIcon,
  UserAddIcon,
} from 'src/libs/design-system/icons';
import styles from './Header.module.scss';

function Header(): JSX.Element {
  const users = [
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
  ];

  return (
    <header className={styles.header}>
      <div>
        <a href="/" title="Back">
          <BackIcon />
        </a>
      </div>
      <div className={styles.actions}>
        <SortIcon />
        <div className={styles.users}>
          {users.map((user, id) => (
            <Avatar
              src={user}
              alt={`User ${id}`}
              key={user}
              className={styles.avatar}
            />
          ))}
          <UserAddIcon />
        </div>

        <ShareIcon />

        <MoreIcon className={styles.moreActions} />
      </div>
    </header>
  );
}

export default Header;

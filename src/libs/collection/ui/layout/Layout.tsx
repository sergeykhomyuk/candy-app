import React from 'react';
import Tag from 'src/libs/design-system/tag';
import styles from './Layout.module.scss';

export interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.title}>
          Candy cotton candy sesame snaps biscuit
        </div>
        <div className={styles.subTitle}>
          Candy cotton candy sesame <Tag>Design</Tag> <Tag>HR</Tag> biscuit
          dessert topping halvah marshmallow gummies. Pie toffee dragée
          chocolate toffee biscuit. Icing chocolate cake ice cream jelly beans
          chocolate cake soufflé candy.
        </div>
      </div>
      {children}
    </div>
  );
}

export default Layout;

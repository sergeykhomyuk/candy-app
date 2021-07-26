import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './Layout.module.scss';

export interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

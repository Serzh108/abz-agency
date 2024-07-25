import React from 'react';
import styles from './Main.module.scss';

interface IMain {
  children: React.ReactNode;
}

const Main = ({ children }: IMain) => {
  return <main className={styles.wrapper}>{children}</main>;
};

export default Main;

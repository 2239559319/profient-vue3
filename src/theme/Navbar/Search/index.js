import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.less';
export default function NavbarSearch({ children, className }) {
  return <div className={clsx(className, styles.searchBox)}>{children}</div>;
}

import styles from './Sidebar.module.css';
import React from 'react';
import HamburgerMenuIcon from '../../UI/Icons/HamburgerMenuIcon';

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.iconContainer}>
        <HamburgerMenuIcon />
      </div>
      <ul className={styles.sidebarLinks}>
        <li>market</li>
        <li>tracker</li>
        <li>results</li>
      </ul>
    </div>
  );
};

export default Sidebar;

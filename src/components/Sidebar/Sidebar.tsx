import styles from './Sidebar.module.css';
import HamburgerMenuIcon from '../../UI/Icons/HamburgerMenuIcon';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { UiActions } from '../../store/slices/ui-slice';
import React, { useState, useRef } from 'react';
import CloseIcon from '../../UI/Icons/CloseIcon';
import useClickOutside from '../../hooks/use-click-outside';

const Sidebar = () => {
  const currentPage = useAppSelector((state) => state.ui.currentPageShown);
  const dispatch = useAppDispatch();
  const { setCurrentPage } = UiActions;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useClickOutside(sidebarRef, setIsSidebarOpen);

  return (
    <div
      ref={sidebarRef}
      className={`${styles.sidebarContainer} ${
        isSidebarOpen ? styles.sidebarContainerOpen : ''
      }`}
    >
      <div
        className={styles.iconContainer}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <CloseIcon /> : <HamburgerMenuIcon />}
      </div>
      {isSidebarOpen && (
        <ul className={styles.sidebarLinks}>
          <li
            onClick={() => {
              setIsSidebarOpen(false);
              dispatch(setCurrentPage('market'));
            }}
            className={currentPage === 'market' ? styles.activeLink : ''}
          >
            market
          </li>
          <li
            onClick={() => {
              setIsSidebarOpen(false);
              dispatch(setCurrentPage('tracker'));
            }}
            className={currentPage === 'tracker' ? styles.activeLink : ''}
          >
            tracker
          </li>
          <li
            onClick={() => {
              setIsSidebarOpen(false);
              dispatch(setCurrentPage('results'));
            }}
            className={currentPage === 'results' ? styles.activeLink : ''}
          >
            results
          </li>
        </ul>
      )}
    </div>
  );
};

export default React.memo(Sidebar);

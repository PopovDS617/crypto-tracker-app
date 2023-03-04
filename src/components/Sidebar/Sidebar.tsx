import styles from './Sidebar.module.css';
import HamburgerMenuIcon from '../../UI/Icons/HamburgerMenuIcon';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { UiActions } from '../../store/slices/ui-slice';

const Sidebar = () => {
  const currentPage = useAppSelector((state) => state.ui.currentPageShown);
  const dispatch = useAppDispatch();
  const { setCurrentPage } = UiActions;

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.iconContainer}>
        <HamburgerMenuIcon />
      </div>
      <ul className={styles.sidebarLinks}>
        <li
          onClick={() => dispatch(setCurrentPage('market'))}
          className={currentPage === 'market' ? styles.activeLink : ''}
        >
          market
        </li>
        <li
          onClick={() => dispatch(setCurrentPage('tracker'))}
          className={currentPage === 'tracker' ? styles.activeLink : ''}
        >
          tracker
        </li>
        <li
          onClick={() => dispatch(setCurrentPage('results'))}
          className={currentPage === 'results' ? styles.activeLink : ''}
        >
          results
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

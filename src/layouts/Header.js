import styles from './Header.module.css';
import { useDispatch } from 'react-redux';
import { UiActions } from '../store/ui-slice';
import useTheme from '../hooks/use-change-theme';

const Header = () => {
  const dispatch = useDispatch();
  const { swi, switchThemeText } = useTheme(styles);

  const changeThemeHandler = () => {
    dispatch(UiActions.changeTheme());
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>
        <h1>crypto tracker</h1>
      </div>
      <div className={styles.headerActions}>
        <button className={switchThemeBtn} onClick={changeThemeHandler}>
          {switchThemeText}
        </button>
      </div>
    </header>
  );
};

export default Header;

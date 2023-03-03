import styles from './Header.module.css';
import { useAppDispatch } from '../store/hooks';
import { UiActions } from '../store/slices/ui-slice';
import useTheme from '../hooks/use-theme';

const Header = () => {
  const dispatch = useAppDispatch();
  const { switchThemeBtn, switchThemeText } = useTheme(styles);

  const changeThemeHandler = () => {
    dispatch(UiActions.changeTheme());
  };

  return (
    <header className={styles.headerContainer}>
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

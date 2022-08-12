import styles from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { UiActions } from '../store/ui-slice';

const Header = () => {
  const appTheme = useSelector((state) => state.ui.theme);
  const dispatch = useDispatch();

  let buttonText = appTheme === 'dark' ? 'to light mode' : 'to dark mode';

  const changeThemeHandler = () => {
    dispatch(UiActions.changeTheme());
  };

  return (
    <header className={styles.title}>
      <h1>crypto tracker</h1>
      <button className={styles['theme-button']} onClick={changeThemeHandler}>
        {buttonText}
      </button>
    </header>
  );
};

export default Header;

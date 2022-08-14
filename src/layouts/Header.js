import styles from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { UiActions } from '../store/ui-slice';

const Header = () => {
  const appTheme = useSelector((state) => state.ui.theme);
  const dispatch = useDispatch();

  let buttonText;
  let buttonStyle;
  if (appTheme === 'dark') {
    buttonText = 'to light mode';
    buttonStyle = styles.btnDark;
  } else {
    buttonText = 'to dark mode';
    buttonStyle = styles.btnLight;
  }

  const changeThemeHandler = () => {
    dispatch(UiActions.changeTheme());
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>
        <h1>crypto tracker</h1>
      </div>
      <div className={styles.headerActions}>
        <button className={buttonStyle} onClick={changeThemeHandler}>
          {buttonText}
        </button>
      </div>
    </header>
  );
};

export default Header;

import styles from './Footer.module.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../store';

const Footer = () => {
  const errorStatus = useSelector((state: RootState) => state.ui.hasError);
  const [notificationStyle, setNotificationStyle] = useState({
    text: 'connected',
    style: `${styles.notification} ${styles.connected}`,
  });

  useEffect(() => {
    if (errorStatus === true) {
      setNotificationStyle({
        text: 'connection lost',
        style: `${styles.notification} ${styles.error}`,
      });
    } else {
      setNotificationStyle({
        text: 'connected to binance',
        style: `${styles.notification} ${styles.connected}`,
      });
    }
  }, [errorStatus]);

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={notificationStyle.style}>{notificationStyle.text}</div>
        <div className={styles.credentials}>
          <p>made by Popov Dmitry</p>

          <a href="https://github.com/PopovDS617" target="blank">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import styles from './Footer.module.css';
import { useAppSelector } from '../../store/hooks';
import { useEffect, useState } from 'react';

const Footer = () => {
  const errorStatus = useAppSelector((state) => state.ui.hasError);
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
      </div>
    </footer>
  );
};

export default Footer;

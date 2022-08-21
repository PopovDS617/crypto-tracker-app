import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>made by Popov Dmitry</p>
      <a href="https://github.com/PopovDS617" target="blank">
        GitHub
      </a>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Banner from '../components/Banner/Banner';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Banner />
      <div className={styles['homepage-container']}>
        <p>crypto tracker</p>
        <Link to="/tracker">
          <button>proceed</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

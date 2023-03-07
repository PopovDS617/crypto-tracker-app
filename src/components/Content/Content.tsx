import styles from './Content.module.css';
import TrackerList from '../Tracker/TrackerList';
import MarketList from '../Market/MarketList';
import ResultList from '../Results/ResultList';
import React from 'react';
import { useAppSelector } from '../../store/hooks';

const Content = () => {
  const currentPage = useAppSelector((state) => state.ui.currentPageShown);

  return (
    <div className={styles['content-container']}>
      {currentPage === 'market' && <MarketList />}
      {currentPage === 'results' && <ResultList />}
      {currentPage === 'tracker' && <TrackerList />}
    </div>
  );
};

export default Content;

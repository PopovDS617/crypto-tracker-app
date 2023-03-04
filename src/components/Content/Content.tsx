import styles from './Content.module.css';
import TrackerList from '../Tracker/TrackerList';
import MarketList from '../Market/MarketList';
import ResultList from '../Results/ResultList';
import React from 'react';

interface Props {
  currentWindow: string;
}

const Content = (props: Props) => {
  return (
    <div className={styles['content-container']}>
      {props.currentWindow === 'market' && <MarketList />}
      {props.currentWindow === 'results' && <ResultList />}
      {props.currentWindow === 'tracker' && <TrackerList />}
    </div>
  );
};

export default Content;

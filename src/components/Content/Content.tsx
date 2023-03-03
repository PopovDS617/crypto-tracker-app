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
      {props.currentWindow === 'market' && (
        <div className="info">
          <div className="list">
            <MarketList />
          </div>
        </div>
      )}
      {props.currentWindow === 'results' && (
        <div className="info">
          <div className="results">
            <ResultList />
          </div>
        </div>
      )}
      {props.currentWindow === 'tracker' && (
        <div className="tracker">
          <TrackerList />
        </div>
      )}
    </div>
  );
};

export default Content;

import React from 'react';
import MarketItem from './MarketItem';

import { useAppSelector } from '../../store/hooks';
import styles from './MarkerList.module.css';

const MarketList = () => {
  const tokenList = useAppSelector((state) => state.global.tokens);

  const fundamentalTokens = tokenList.map((token) => {
    if (token.type === 'fundamental') {
      return (
        <MarketItem
          key={Math.random()}
          displayGlobalShortName={
            token.displayGlobalShortName ? token.displayGlobalShortName : ''
          }
          displayGlobalFullName={
            token.displayGlobalFullName ? token.displayGlobalFullName : ''
          }
          price={token.price}
          dailyChange={token.dailyChange}
        />
      );
    }
  });
  const networkTokens = tokenList.map((token) => {
    if (token.type === 'network') {
      return (
        <MarketItem
          key={Math.random()}
          displayGlobalShortName={
            token.displayGlobalShortName ? token.displayGlobalShortName : ''
          }
          displayGlobalFullName={
            token.displayGlobalFullName ? token.displayGlobalFullName : ''
          }
          price={token.price}
          dailyChange={token.dailyChange}
        />
      );
    }
  });
  const defiTokens = tokenList.map((token) => {
    if (token.type === 'defi') {
      return (
        <MarketItem
          key={Math.random()}
          displayGlobalShortName={
            token.displayGlobalShortName ? token.displayGlobalShortName : ''
          }
          displayGlobalFullName={
            token.displayGlobalFullName ? token.displayGlobalFullName : ''
          }
          price={token.price}
          dailyChange={token.dailyChange}
        />
      );
    }
  });
  const metaverseTokens = tokenList.map((token) => {
    if (token.type === 'metaverse') {
      return (
        <MarketItem
          key={Math.random()}
          displayGlobalShortName={
            token.displayGlobalShortName ? token.displayGlobalShortName : ''
          }
          displayGlobalFullName={
            token.displayGlobalFullName ? token.displayGlobalFullName : ''
          }
          price={token.price}
          dailyChange={token.dailyChange}
        />
      );
    }
  });
  const otherTokens = tokenList.map((token) => {
    if (token.type === 'other') {
      return (
        <MarketItem
          key={Math.random()}
          displayGlobalShortName={
            token.displayGlobalShortName ? token.displayGlobalShortName : ''
          }
          displayGlobalFullName={
            token.displayGlobalFullName ? token.displayGlobalFullName : ''
          }
          price={token.price}
          dailyChange={token.dailyChange}
        />
      );
    }
  });

  return (
    <div className="info">
      <div className={styles.marketListContainer}>
        <div>
          <h2>Main tokens</h2>
          <hr />
          <div className={styles.marketList}>{fundamentalTokens}</div>
        </div>
        <div>
          <h2>Blockchain networks</h2> <hr />
          <div className={styles.marketList}>{networkTokens}</div>
        </div>
        <div>
          <h2>DeFi</h2> <hr />
          <div className={styles.marketList}>{defiTokens}</div>
        </div>
        <div>
          <h2>Metaverse tokens</h2> <hr />
          <div className={styles.marketList}>{metaverseTokens}</div>
        </div>
        <div>
          <h2>Other tokens</h2> <hr />
          <div className={styles.marketList}>{otherTokens}</div>
        </div>
      </div>
    </div>
  );
};

export default MarketList;

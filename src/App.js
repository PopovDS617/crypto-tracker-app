import Layout from './layouts/Layout';
import TrackerList from './components/Tracker/TrackerList';
import GlobalMarketList from './components/GlobalMarket/GlobalMarketList';
import FavortieTokenList from './components/FavoriteTokens/FavoriteTokenList';

import React, { useEffect } from 'react';
import './globals.css';

import useFetch from '../src/hooks/use-fetch';

function App() {
  const { fetchData, isLoading } = useFetch();

  useEffect(() => {
    if (!isLoading) {
      fetchData();
      const fetchTimer = setInterval(fetchData, 3000);
      return () => clearTimeout(fetchTimer);
    }
  }, [fetchData]);

  return (
    <Layout>
      <GlobalMarketList />
      <div className="contentWrapper">
        <div className="tracker">
          <TrackerList />
        </div>
        <div>
          <FavortieTokenList className="favorites" />
        </div>
      </div>
    </Layout>
  );
}

export default App;

import Layout from './layouts/Layout';
import Tracker from './components/Tracker/Tracker';
import GlobalMarketList from './components/GlobalMarket/GlobalMarketList';
import FavortieTokenList from './components/FavoriteTokens/FavoriteTokenList';
import React, { useEffect } from 'react';

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
          <Tracker />
        </div>
        <div>
          <FavortieTokenList className="favorites" />
        </div>
      </div>
    </Layout>
  );
}

export default App;

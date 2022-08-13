import Layout from './layouts/Layout';
import TrackerList from './components/Tracker/TrackerList';
import GlobalMarketList from './components/GlobalMarket/GlobalMarketList';

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

      <TrackerList />
    </Layout>
  );
}

export default App;

import TrackerList from './components/Tracker/TrackerList';
import GlobalMarketList from './components/GlobalMarket/GlobalMarketList';
import ResultList from './components/Results/ResultList';
import Header from './layouts/Header';
import { useSelector } from 'react-redux';

import React, { useEffect } from 'react';
import './globals.css';

import useFetch from '../src/hooks/use-fetch';
import Footer from './layouts/Footer';

function App() {
  const { fetchData, isLoading } = useFetch();

  const appTheme = useSelector((state) => state.ui.theme);

  let currentTheme;
  if (appTheme === 'dark') {
    currentTheme = `layout layout-dark`;
  } else {
    currentTheme = `layout layout-light`;
  }

  useEffect(() => {
    if (!isLoading) {
      fetchData();
      const fetchTimer = setInterval(fetchData, 3000);
      return () => clearTimeout(fetchTimer);
    }
  }, [fetchData]);

  return (
    <div className={currentTheme}>
      <div className="header">
        <Header />
      </div>
      <div className="list">
        <GlobalMarketList />
      </div>
      <main className="main">
        <div className="tracker">
          <TrackerList />
        </div>
        <div className="aside">
          <ResultList />
        </div>
      </main>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

import TrackerList from './components/Tracker/TrackerList';
import GlobalMarketList from './components/GlobalMarket/GlobalMarketList';
import ResultList from './components/Results/ResultList';
import Header from './layouts/Header';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import './globals.css';

import useFetchCurrentPrice from './hooks/use-fetch-current-price';
import useFetchDailyChange from './hooks/use-fetch-daily-change';
import Footer from './layouts/Footer';

function App() {
  const { fetchData: fetchCurrentPrice, isError } = useFetchCurrentPrice();

  const { fetchData: fetchDailyChange } = useFetchDailyChange();

  const appTheme = useSelector((state) => state.ui.theme);

  let currentTheme;
  if (appTheme === 'dark') {
    currentTheme = `layout layout-dark`;
  } else {
    currentTheme = `layout layout-light`;
  }

  useEffect(() => {
    fetchCurrentPrice();
    const fetchTimer = setInterval(fetchCurrentPrice, 5000);
    return () => clearInterval(fetchTimer);
  }, [fetchCurrentPrice]);
  useEffect(() => {
    fetchDailyChange();
    const fetchTimer = setInterval(fetchDailyChange, 45000);
    return () => clearInterval(fetchTimer);
  }, [fetchDailyChange]);

  return (
    <div className={currentTheme}>
      <div className="header">
        <Header />
      </div>
      <div className="info">
        <div className="list">
          <GlobalMarketList />
        </div>
        <div className="results">
          <ResultList />
        </div>
      </div>

      <div className="tracker">
        <TrackerList />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

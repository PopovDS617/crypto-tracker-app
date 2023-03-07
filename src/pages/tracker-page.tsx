import Header from '../components/Layouts/Header';
import useFetchCurrentPrice from '../hooks/use-fetch-current-price';
import useFetchDailyChange from '../hooks/use-fetch-daily-change';
import Footer from '../components/Layouts/Footer';
import { useAppSelector } from '../store/hooks';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/Content/Content';

const Tracker = () => {
  const { fetchData: fetchCurrentPrice } = useFetchCurrentPrice();
  const { fetchData: fetchDailyChange } = useFetchDailyChange();

  const appTheme = useAppSelector((state) => state.ui.theme);

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
      <Sidebar />
      <Content />

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Tracker;

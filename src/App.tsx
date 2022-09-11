import Tracker from './pages/tracker-page';
import HomePage from './pages/index';
import './globals.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tracker" element={<Tracker />} />
    </Routes>
  );
};

export default App;

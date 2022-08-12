import React from 'react';
import TrackerList from './TrackerList.js';
import NewLog from './NewLog';

const Tracker = () => {
  return (
    <div className="trackerWrapper">
      <TrackerList />
      <NewLog />
    </div>
  );
};

export default Tracker;

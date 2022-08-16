import React from 'react';
import { useSelector } from 'react-redux';

const ResultList = () => {
  const logs = useSelector((state) => state.global.logs);

  const completedDeals = logs
    .filter((log) => log.status === 'sold')
    .map((item) => {
      let finalResult = 0;

      finalResult +=
        item.quantity * item.sellPrice - item.quantity * item.buyPrice;
      return finalResult;
    });

  return (
    <div>
      <div>Completed deals: {completedDeals}</div>
      <div>Current deals:</div>
      ResultList
    </div>
  );
};

export default ResultList;

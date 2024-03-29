import { createSlice } from '@reduxjs/toolkit';
import { TrackerState } from '../models/token-models';

const initialGlobalMarketState: TrackerState = {
  tokens: [
    {
      tokenName: 'BTCUSDT',
      price: 0,
      dailyChange: 0,
      global: true,
      displayGlobalFullName: 'BTC',
      displayGlobalShortName: 'Bitcoin',
    },
    {
      tokenName: 'ETHUSDT',
      price: 0,
      dailyChange: 0,
      global: true,
      displayGlobalShortName: 'ETH',
      displayGlobalFullName: 'Ethereum',
    },
    {
      tokenName: 'SOLUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
      displayGlobalShortName: 'SOL',
      displayGlobalFullName: 'Solana',
    },
    {
      tokenName: 'ETCUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: 'BNBUSDT',
      price: 0,
      dailyChange: 0,
      global: true,
      displayGlobalShortName: 'BNB',
      displayGlobalFullName: 'Binance Coin',
    },
    {
      tokenName: 'ADAUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: 'MATICUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: 'XRPUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
      displayGlobalShortName: 'XRP',
      displayGlobalFullName: 'Ripple',
    },
    {
      tokenName: 'AVAXUSDT',
      price: 0,
      dailyChange: 0,
      global: true,
      displayGlobalShortName: 'AVAX',
      displayGlobalFullName: 'Avalanche',
    },
    {
      tokenName: 'DOGEUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: 'LTCUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
      displayGlobalShortName: 'LTC',
      displayGlobalFullName: 'Litecoin',
    },
    {
      tokenName: 'DOTUSDT',
      price: 0,
      dailyChange: 0,
      global: true,
      displayGlobalShortName: 'DOT',
      displayGlobalFullName: 'Polkadot',
    },
    {
      tokenName: 'SHIBUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: 'TRXUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: 'LINKUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: 'NEARUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: 'CAKEUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
      displayGlobalShortName: 'CAKE',
      displayGlobalFullName: 'PancakeSwap',
    },
    {
      tokenName: 'SUSHIUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
      displayGlobalShortName: 'SUSHI',
      displayGlobalFullName: 'Sushi',
    },
    {
      tokenName: 'UNIUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
      displayGlobalShortName: 'UNI',
      displayGlobalFullName: 'Uniswap',
    },
    {
      tokenName: 'AAVEUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: 'ATOMUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: 'GMTUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: 'RUNEUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: 'TWTUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
      displayGlobalShortName: 'TWT',
      displayGlobalFullName: 'Trust Wallet Token',
    },
    {
      tokenName: 'ZECUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: '1INCHUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: 'LUNAUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: 'MANAUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
    {
      tokenName: 'GLMRUSDT',
      price: 0,
      dailyChange: 0,
      global: false,
    },
  ],

  logs: [
    {
      id: Math.random().toFixed(8),
      tokenName: 'TWTUSDT',
      buyPrice: 0.75,
      sellPrice: null,
      quantity: 125,
      ratioGainLoss: 0,
      status: 'active',
    },
    {
      id: Math.random().toFixed(8),
      tokenName: 'BTCUSDT',
      buyPrice: 13500,
      sellPrice: null,
      quantity: 0.655,
      ratioGainLoss: 0,
      status: 'active',
    },
    {
      id: Math.random().toFixed(8),
      tokenName: 'AVAXUSDT',
      buyPrice: 19,
      sellPrice: 24,
      quantity: 50,
      ratioGainLoss: 0,
      status: 'sold',
    },
    {
      id: Math.random().toFixed(8),
      tokenName: 'SUSHIUSDT',
      buyPrice: 1.225,
      sellPrice: 1.552,
      quantity: 800,
      ratioGainLoss: 0,
      status: 'sold',
    },
  ],
};

const globalMarketSlice = createSlice({
  name: 'global',
  initialState: initialGlobalMarketState,
  reducers: {
    updateCurrentPrice(state, action) {
      const updatedArray = [...state.tokens];

      for (let i = 0; i < updatedArray.length; i++) {
        for (let x = 0; x < updatedArray.length; x++) {
          if (updatedArray[i].tokenName === action.payload[x].symbol) {
            updatedArray[i] = {
              ...updatedArray[i],
              price: +action.payload[x].price,
            };
          }
        }
      }
      state.tokens = updatedArray;
    },
    updateDailyChange(state, action) {
      const updatedArray = [...state.tokens];

      for (let i = 0; i < updatedArray.length; i++) {
        for (let x = 0; x < updatedArray.length; x++) {
          if (updatedArray[i].tokenName === action.payload[x].symbol) {
            updatedArray[i] = {
              ...updatedArray[i],
              dailyChange: +action.payload[x].priceChange,
            };
          }
        }
      }
      state.tokens = updatedArray;
    },

    addLog(state, action) {
      const updatedArray = [...state.logs];
      const newLog = {
        id: Math.random().toFixed(8),
        tokenName: action.payload.tokenName,
        buyPrice: action.payload.buyPrice,
        sellPrice: null,
        price: null,
        quantity: action.payload.quantity,
        ratioGainLoss: 0,
        status: 'active',
      };
      updatedArray.push(newLog);

      state.logs = updatedArray;
    },

    deleteLog(state, action) {
      const logArray = [...state.logs];

      const filteredArray = logArray.filter(
        (item) => item.id !== action.payload.id
      );

      state.logs = filteredArray;
    },
    sellLog(state, action) {
      const logArray = [...state.logs];
      const itemIndex = logArray.findIndex((el) => el.id === action.payload.id);
      let updatedItem = logArray[itemIndex];
      updatedItem = {
        ...logArray[itemIndex],
        sellPrice: action.payload.sellPrice,
        status: 'sold',
        ratioGainLoss:
          logArray[itemIndex].quantity * +action.payload.sellPrice -
          logArray[itemIndex].quantity * logArray[itemIndex].buyPrice,
      };

      logArray[itemIndex] = updatedItem;

      state.logs = logArray;
    },
    changeLog(state, action) {
      const logArray = [...state.logs];
      const itemIndex = logArray.findIndex((el) => el.id === action.payload.id);
      let updatedItem = logArray[itemIndex];
      updatedItem = {
        ...logArray[itemIndex],
        buyPrice: +action.payload.buyPrice,
        sellPrice:
          +action.payload.sellPrice === 0 ? null : +action.payload.sellPrice,
        quantity: +action.payload.quantity,
        ratioGainLoss:
          (action.payload.sellPrice - logArray[itemIndex].buyPrice) *
          logArray[itemIndex].quantity,
        status: action.payload.status,
      };
      logArray[itemIndex] = updatedItem;
      state.logs = logArray;
      console.log(logArray);
    },
  },
});

export const globalActions = globalMarketSlice.actions;

export default globalMarketSlice.reducer;

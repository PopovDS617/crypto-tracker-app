import { createSlice } from '@reduxjs/toolkit';

const initialGlobalMarketState = {
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
      global: true,
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
      global: true,
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
      global: true,
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
      global: true,
      displayGlobalShortName: 'CAKE',
      displayGlobalFullName: 'PancakeSwap',
    },
    {
      tokenName: 'SUSHIUSDT',
      price: 0,
      dailyChange: 0,
      global: true,
      displayGlobalShortName: 'SUSHI',
      displayGlobalFullName: 'Sushi',
    },
    {
      tokenName: 'UNIUSDT',
      price: 0,
      dailyChange: 0,
      global: true,
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
      global: true,
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
      buyPrice: '0.99',
      sellPrice: null,

      quantity: '125',
      ratioGainLoss: '25',
      status: 'active',
    },
    {
      id: Math.random().toFixed(8),
      tokenName: 'BTCUSDT',
      buyPrice: '9000',
      sellPrice: null,

      quantity: '3',
      ratioGainLoss: '25',
      status: 'active',
    },
    {
      id: Math.random().toFixed(8),
      tokenName: 'AVAXUSDT',
      buyPrice: 19,
      sellPrice: 24,

      quantity: 4,
      ratioGainLoss: 24 * 4 - 19 * 4,
      status: 'sold',
    },
    {
      id: Math.random().toFixed(8),
      tokenName: 'SUSHIUSDT',
      buyPrice: 1.325,
      sellPrice: 24,

      quantity: 250,
      ratioGainLoss: 150,
      status: 'sold',
    },
  ],
};

const globalMarketSlice = createSlice({
  name: 'global',
  initialState: initialGlobalMarketState,
  reducers: {
    updatePrice(state, action) {
      const updatedArray = [...state.tokens];

      for (let i = 0; i < updatedArray.length; i++) {
        for (let x = 0; x < updatedArray.length; x++) {
          if (
            updatedArray[i].tokenName === action.payload.currentPrice[x].symbol
          ) {
            updatedArray[i] = {
              ...updatedArray[i],
              price: Number(action.payload.currentPrice[x].price).toFixed(2),
              dailyChange: Number(
                action.payload.dailyPrice[x].priceChange
              ).toFixed(2),
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
  },
});

export const globalActions = globalMarketSlice.actions;

export default globalMarketSlice.reducer;

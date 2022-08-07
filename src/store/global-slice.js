import { createSlice, current } from "@reduxjs/toolkit";

const initialGlobalMarketState = {
  tokens: [
    {
      tokenName: "BTCUSDT",
      price: 0,
      global: true,
      favorite: false,
    },
    {
      tokenName: "ETHUSDT",
      price: 0,
      global: true,
      favorite: false,
    },
    {
      tokenName: "TWTUSDT",
      price: 0,
      global: false,
      favorite: true,
    },
    {
      tokenName: "DOTUSDT",
      price: 0,
      global: false,
      favorite: true,
    },
    {
      tokenName: "BNBUSDT",
      price: 0,
      global: true,
      favorite: false,
    },
    {
      tokenName: "XRPUSDT",
      price: 0,
      global: false,
      favorite: true,
    },
    {
      tokenName: "ADAUSDT",
      price: 0,
      global: false,
      favorite: true,
    },
    {
      tokenName: "AVAXUSDT",
      price: 0,
      global: false,
      favorite: true,
    },
    {
      tokenName: "NEARUSDT",
      price: 0,
      global: false,
      favorite: true,
    },
    {
      tokenName: "INJUSDT",
      price: 0,
      global: false,
      favorite: true,
    },
    {
      tokenName: "SUSHIUSDT",
      price: 0,
      global: false,
      favorite: true,
    },
    {
      tokenName: "UNIUSDT",
      price: 0,
      global: false,
      favorite: true,
    },
  ],
  logs: [
    {
      id: Math.random().toFixed(8),
      tokenName: "TWTUSDT",
      buyPrice: "0.99",
      sellPrice: false,
      price: 0,
      quantity: "125",
      ratioGainLoss: "25",
      status: "active",
    },
    {
      id: Math.random().toFixed(8),
      tokenName: "BTCUSDT",
      buyPrice: "9000",
      sellPrice: false,
      price: 0,
      quantity: "3",
      ratioGainLoss: "25",
      status: "active",
    },
    {
      id: Math.random().toFixed(8),
      tokenName: "AVAXUSDT",
      buyPrice: 19,
      sellPrice: 24,
      price: 0,
      quantity: 4,
      ratioGainLoss: 24 * 4 - 19 * 4,
      status: "sold",
    },
    {
      id: Math.random().toFixed(8),
      tokenName: "INJUSDT",
      buyPrice: 1.325,
      sellPrice: 24,
      price: 0,
      quantity: 250,
      ratioGainLoss: 150,
      status: "sold",
    },
  ],
};

const globalMarketSlice = createSlice({
  name: "global",
  initialState: initialGlobalMarketState,
  reducers: {
    updatePrice(state, action) {
      const updatedArray = [...state.tokens];
      const updatedLogs = [...state.logs];
      // updatedArray.map((el, index) => {
      //   return (el.price = action.payload[index].price);
      // });
      for (let i = 0; i < updatedArray.length; i++) {
        for (let x = 0; x < updatedArray.length; x++) {
          if (updatedArray[i].tokenName === action.payload[x].symbol) {
            updatedArray[i].price = Number(action.payload[x].price).toFixed(2);
          }
        }
      }

      for (let i = 0; i < updatedLogs.length; i++) {
        for (let x = 0; x < action.payload.length; x++) {
          if (updatedLogs[i].tokenName === action.payload[x].symbol) {
            updatedLogs[i].price = Number(action.payload[x].price).toFixed(3);
          }
        }
      }

      state.tokens = updatedArray;
      state.logs = updatedLogs;
    },
    addLog(state, action) {
      const updatedArray = [...state.logs];
      const newLog = {
        tokenName: action.payload.tokenName,
        buyPrice: action.payload.buyPrice,
        sellPrice: action.payload.sellPrice,
        price: 0,
        quantity: action.payload.quantity,
        ratioGainLoss: 0,
        status: "active",
      };
      updatedArray.push(newLog);
      state.logs = updatedArray;
    },

    deleteLog(state, action) {
      const logArray = [...state.logs];

      const filteredArray = logArray.filter(
        (item) => item.id !== action.payload.id
      );

      console.log(filteredArray);
      state.logs = filteredArray;
    },
  },
});

export const globalActions = globalMarketSlice.actions;

export default globalMarketSlice.reducer;

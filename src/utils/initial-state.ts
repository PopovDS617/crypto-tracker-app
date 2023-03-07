import { TrackerState } from '../models/tracker-models';

export const initialTrackerState: TrackerState = {
  tokens: [
    {
      tokenName: 'BTCUSDT',
      price: 0,
      dailyChange: 0,
      type: 'fundamental',
      displayGlobalFullName: 'BTC',
      displayGlobalShortName: 'Bitcoin',
    },
    {
      tokenName: 'ETHUSDT',
      price: 0,
      dailyChange: 0,
      type: 'fundamental',

      displayGlobalShortName: 'ETH',
      displayGlobalFullName: 'Ethereum',
    },

    {
      tokenName: 'BNBUSDT',
      price: 0,
      dailyChange: 0,
      type: 'fundamental',
      displayGlobalShortName: 'BNB',
      displayGlobalFullName: 'Binance Coin',
    },
    {
      tokenName: 'LTCUSDT',
      price: 0,
      dailyChange: 0,
      type: 'fundamental',
      displayGlobalShortName: 'LTC',
      displayGlobalFullName: 'Litecoin',
    },

    {
      tokenName: 'XRPUSDT',
      price: 0,
      dailyChange: 0,
      type: 'fundamental',
      displayGlobalShortName: 'XRP',
      displayGlobalFullName: 'Ripple',
    },
    {
      tokenName: 'ADAUSDT',
      price: 0,
      dailyChange: 0,
      type: 'network',
      displayGlobalShortName: 'ADA',
      displayGlobalFullName: 'Cardano',
    },
    {
      tokenName: 'AVAXUSDT',
      price: 0,
      dailyChange: 0,
      type: 'network',
      displayGlobalShortName: 'AVAX',
      displayGlobalFullName: 'Avalanche',
    },

    {
      tokenName: 'DOTUSDT',
      price: 0,
      dailyChange: 0,
      type: 'network',
      displayGlobalShortName: 'DOT',
      displayGlobalFullName: 'Polkadot',
    },

    {
      tokenName: 'TRXUSDT',
      price: 0,
      dailyChange: 0,
      type: 'network',
      displayGlobalShortName: 'TRX',
      displayGlobalFullName: 'TRON',
    },
    {
      tokenName: 'LINKUSDT',
      price: 0,
      dailyChange: 0,
      type: 'network',
      displayGlobalShortName: 'LINK',
      displayGlobalFullName: 'ChainLink',
    },
    {
      tokenName: 'NEARUSDT',
      price: 0,
      dailyChange: 0,
      type: 'network',
      displayGlobalShortName: 'NEAR',
      displayGlobalFullName: 'NEAR Protocol',
    },
    {
      tokenName: '1INCHUSDT',
      price: 0,
      dailyChange: 0,
      type: 'network',
      displayGlobalShortName: '1INCH',
      displayGlobalFullName: '1inch',
    },
    {
      tokenName: 'CAKEUSDT',
      price: 0,
      dailyChange: 0,
      type: 'defi',
      displayGlobalShortName: 'CAKE',
      displayGlobalFullName: 'PancakeSwap',
    },
    {
      tokenName: 'SUSHIUSDT',
      price: 0,
      dailyChange: 0,
      type: 'defi',
      displayGlobalShortName: 'SUSHI',
      displayGlobalFullName: 'Sushi',
    },
    {
      tokenName: 'UNIUSDT',
      price: 0,
      dailyChange: 0,
      type: 'defi',
      displayGlobalShortName: 'UNI',
      displayGlobalFullName: 'Uniswap',
    },
    {
      tokenName: 'AAVEUSDT',
      price: 0,
      dailyChange: 0,
      type: 'defi',
      displayGlobalShortName: 'AAVE',
      displayGlobalFullName: 'Aave',
    },
    {
      tokenName: 'ATOMUSDT',
      price: 0,
      dailyChange: 0,
      type: 'defi',
      displayGlobalShortName: 'ATOM',
      displayGlobalFullName: 'Cosmos',
    },

    {
      tokenName: 'RUNEUSDT',
      price: 0,
      dailyChange: 0,
      type: 'defi',
      displayGlobalShortName: 'RUNE',
      displayGlobalFullName: 'THORChain',
    },
    {
      tokenName: 'TWTUSDT',
      price: 0,
      dailyChange: 0,
      type: 'defi',
      displayGlobalShortName: 'TWT',
      displayGlobalFullName: 'Trust Wallet Token',
    },

    {
      tokenName: 'MANAUSDT',
      price: 0,
      dailyChange: 0,
      type: 'metaverse',
      displayGlobalShortName: 'MANA',
      displayGlobalFullName: 'Deventraland',
    },
    {
      tokenName: 'SANDUSDT',
      price: 0,
      dailyChange: 0,
      type: 'metaverse',
      displayGlobalShortName: 'SAND',
      displayGlobalFullName: 'The Sandbox',
    },
    {
      tokenName: 'AXSUSDT',
      price: 0,
      dailyChange: 0,
      type: 'metaverse',
      displayGlobalShortName: 'AXS',
      displayGlobalFullName: 'Axie Infinity',
    },
    {
      tokenName: 'DOGEUSDT',
      price: 0,
      dailyChange: 0,
      type: 'other',
      displayGlobalShortName: 'DOGE',
      displayGlobalFullName: 'Dogecoin',
    },
    {
      tokenName: 'SHIBUSDT',
      price: 0,
      dailyChange: 0,
      type: 'other',
      displayGlobalShortName: 'SHIB',
      displayGlobalFullName: 'SHIBA INU',
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

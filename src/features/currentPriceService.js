// import { tokens } from '../data';

// const urlConverter = (infoType) => {
//   const urlList = tokens.map((token) => token.tokenName);
//   const url = urlList.join('","');

//   return `https://www.binance.com/api/v3/ticker/${infoType}?symbols=["${url}"]`;
// };
// const currentPriceUrl = urlConverter('price');

// export const fetchData = async () => {
//   const currentDataResponse = await fetch(
//     'https://www.binance.com/api/v3/ticker/price?symbol=BTCUSDT'
//   );

//   const currentPrice = await currentDataResponse.json();

//   return currentPrice;
// };

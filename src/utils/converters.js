export const urlConverter = (data, infoType) => {
  const urlList = data.map((token) => token.tokenName);
  const url = urlList.join('","');

  return `https://www.binance.com/api/v3/ticker/${infoType}?symbols=["${url}"]`;
};

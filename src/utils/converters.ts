import { Token } from '../models/token-models';

export const urlConverter = (data: Token[], infoType: string) => {
  const urlList = data.map((token) => token.tokenName);
  const url = urlList.join('","');

  return `https://www.binance.com/api/v3/ticker/${infoType}?symbols=["${url}"]`;
};

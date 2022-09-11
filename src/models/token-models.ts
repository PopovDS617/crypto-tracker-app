export interface IToken {
  tokenName: string;
  price: number;
  dailyChange: number;
  global: boolean;
  displayGlobalFullName?: string;
  displayGlobalShortName?: string;
}

export interface ILog {
  id: string;
  tokenName: string;
  buyPrice: number;
  sellPrice: number | null;
  quantity: number;
  ratioGainLoss: number;
  status: string;
}

export interface ITrackerState {
  tokens: IToken[];
  logs: ILog[];
}

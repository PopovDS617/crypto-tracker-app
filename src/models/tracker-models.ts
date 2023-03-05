export interface Token {
  tokenName: string;
  price: number;
  dailyChange: number;
  type: string;
  displayGlobalFullName?: string;
  displayGlobalShortName?: string;
}

export interface Log {
  id: string;
  tokenName: string;
  buyPrice: number;
  sellPrice: number | null;
  quantity: number;
  ratioGainLoss: number;
  status: string;
}

export interface TrackerState {
  tokens: Token[];
  logs: Log[];
}

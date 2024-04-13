interface StockData {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
}

export interface CustomHeaderProps {
  title: string;
}

export interface StockItemProps {
  item: StockData;
  index: number;
}

export interface Holding {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
}

export interface UseProfitLossProps {
  ltp: number;
  quantity: number;
  avgPrice: number;
}
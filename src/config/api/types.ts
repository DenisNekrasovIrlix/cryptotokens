export interface IAPIConfig {
  routes: {
    allCoinsMarketData: () => string;
    historicalDataSpecificCoin: (id: string, time: number | "max") => string;
    dataCoin: (id: string) => string;
  };
}

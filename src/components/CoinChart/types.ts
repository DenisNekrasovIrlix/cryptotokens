import { IDataCoin, IHistoricalDataCoin } from "models/coins";

export interface IOptionsCoinChart {
  title: {
    text: string;
  };
  series: Array<{
    name: string;
    data: [number, number][];
  }>;
}
export interface IPropsCoinChart {
  dataHistorical: IHistoricalDataCoin;
  dataCoin: IDataCoin;
}

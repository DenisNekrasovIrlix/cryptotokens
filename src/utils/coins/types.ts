export interface IReturnDataPrice {
  current_price: number;
  price_change_24h: number;
  ath: number;
  atl: number;
}
export interface IArgsDataPrice {
  [index: string]: number;
}
export type IParsePrice = (
  dataWithPrice: IArgsDataPrice,
  numberParse: number
) => IReturnDataPrice;

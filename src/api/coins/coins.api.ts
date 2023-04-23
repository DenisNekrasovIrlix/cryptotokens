import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api, host } from "config/api";
import {
  IMarketDataCoins,
  IHistoricalDataCoin,
  IDataCoin,
} from "models/coins/coins.models";
import { IParamsGetHistoricalDataSpecificCoin } from "./types";

export const coinsAPI = createApi({
  reducerPath: "coinsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: host }),
  endpoints: (build) => ({
    // Получаем список криптовалют
    getAllCoinsMarketData: build.query<IMarketDataCoins, void>({
      query: () => {
        return {
          url: api.routes.allCoinsMarketData(),
          method: "GET",
        };
      },
    }),
    // Получаем историю изменения стоимости криптовалюты
    getHistoricalDataSpecificCoin: build.query<
      IHistoricalDataCoin,
      IParamsGetHistoricalDataSpecificCoin
    >({
      query: ({ id, time }) => {
        return {
          url: api.routes.historicalDataSpecificCoin(id, time),
          method: "GET",
        };
      },
    }),
    // Получаем дополнительные данные о криптовалюте
    getDataCoin: build.query<IDataCoin, string>({
      query: (id: string) => {
        return {
          url: api.routes.dataCoin(id),
          method: "GET",
        };
      },
    }),
  }),
});
export const {
  useGetAllCoinsMarketDataQuery,
  useGetHistoricalDataSpecificCoinQuery,
  useGetDataCoinQuery,
} = coinsAPI;

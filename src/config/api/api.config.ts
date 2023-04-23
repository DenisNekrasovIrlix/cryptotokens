import { IAPIConfig } from "./types";

export const host = "https://api.coingecko.com/api/v3";
export const api: IAPIConfig = {
  routes: {
    allCoinsMarketData() {
      return "/coins/markets?vs_currency=rub&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=ru";
    },
    historicalDataSpecificCoin(id, time) {
      return `/coins/${id}/market_chart?vs_currency=usd&days=${time}`;
    },
    dataCoin(id) {
      return `/coins/${id}?localization=true&market_data=true&community_data=true`;
    },
  },
};

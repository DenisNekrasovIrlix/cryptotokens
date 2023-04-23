import { CoinSpecific } from "pages/CoinSpecific";
import { Coins } from "pages/Coins";
import { Main } from "pages/Main";
import { IRoutes } from "./types";

// Список маршрутов в приложении
export const routes: IRoutes = [
  {
    element: Main,
    path: "/",
  },
  {
    element: Coins,
    path: "/coins",
  },
  {
    element: CoinSpecific,
    path: "/coins/:idSpecific",
  },
];

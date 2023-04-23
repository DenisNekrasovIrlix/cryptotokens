import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { coinsAPI } from "api/coins/coins.api";

const rootReducer = combineReducers({
  [coinsAPI.reducerPath]: coinsAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([coinsAPI.middleware]),
});

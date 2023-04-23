import React from "react";
import { Grid } from "@mui/material";
import { useGetAllCoinsMarketDataQuery } from "api/coins/coins.api";
import { Error } from "components/Error";
import { ItemCoin } from "components/ItemCoin";
import { Loader } from "components/Loader";

// Компонент списка криптовалют
export const ListCoins = function () {
  const { data, isError } = useGetAllCoinsMarketDataQuery();
  return (
    <>
      {isError && <Error text="Произошла ошибка при загрузке данных!" />}
      {!data && !isError && <Loader />}
      {data && !isError && (
        <Grid container flexWrap={"wrap"} gap={4} justifyContent={"center"}>
          {data?.map(
            ({
              id,
              name,
              image,
              current_price,
              price_change_24h,
              ath,
              atl,
            }) => (
              <ItemCoin
                key={id}
                id={id}
                name={name}
                image={image}
                current_price={current_price}
                price_change_24h={price_change_24h}
                ath={ath}
                atl={atl}
              />
            )
          )}
        </Grid>
      )}
    </>
  );
};

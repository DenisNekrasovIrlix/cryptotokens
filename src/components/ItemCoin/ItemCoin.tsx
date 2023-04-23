import React, { FC } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { IMarketDataCoin } from "models/coins";
import {
  CoinProperties,
  CoinWrapper,
  ImageCoin,
  InfoChangeSale,
} from "./style";
import { getChangeSale, parsePrice } from "utils/coins";
import { IReturnDataPrice } from "utils/coins/types";
import { useNavigate } from "react-router-dom";

// Карточка криптовалюты. Используется в списке.
export const ItemCoin: FC<Partial<IMarketDataCoin>> = function ({
  id,
  name,
  image,
  current_price,
  price_change_24h,
  ath,
  atl,
}) {
  const navigate = useNavigate();
  const openPageCoin = () => {
    navigate(`/coins/${id}`);
  };
  const isProps = current_price && price_change_24h && ath && atl;
  let convertedPrice = {} as IReturnDataPrice;
  if (isProps) {
    convertedPrice = parsePrice(
      { current_price, price_change_24h, ath, atl },
      4
    );
  }
  const isChangeSale = getChangeSale(price_change_24h as number);
  const isIconChangeSale = isChangeSale ? (
    <TrendingUpRoundedIcon color={"success"} />
  ) : (
    <TrendingDownRoundedIcon color={"error"} />
  );
  return (
    <CoinWrapper>
      <ImageCoin src={image} alt={`Логотип ${name}'а`} />
      <CoinProperties>
        <Typography variant={"body1"}>Наименование: {name}</Typography>
        <Typography variant={"body1"}>
          Цена (RUB): {convertedPrice.current_price}
        </Typography>
        <Typography variant={"body1"}>
          ATH (RUB): {convertedPrice.ath}
        </Typography>
        <Typography variant={"body1"}>
          ATL (RUB): {convertedPrice.atl}
        </Typography>
      </CoinProperties>
      <Button onClick={openPageCoin} fullWidth variant={"contained"}>
        Подробнее
      </Button>
      <InfoChangeSale>
        <Typography variant={"body1"}>Изменение цены, 24h:</Typography>
        <Typography variant={"body1"}>
          {convertedPrice.price_change_24h} RUB
        </Typography>
        {isIconChangeSale}
      </InfoChangeSale>
    </CoinWrapper>
  );
};

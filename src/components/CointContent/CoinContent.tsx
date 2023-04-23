import React from "react";
import Typography from "@mui/material/Typography";
import { parseDateGenesis } from "utils/coins";
import { CoinContentBox, CoinContentIcon, CoinDesc } from "./style";
import { IPropsCoinSpecific } from "./types";

// Компонент с информацией о криптовалюте
export const CoinContent: React.FC<IPropsCoinSpecific> = function ({
  dataCoin,
}) {
  let convertedDate = "";
  if (dataCoin.genesis_date) {
    convertedDate = parseDateGenesis(
      dataCoin.genesis_date
    ).toLocaleDateString();
  }
  return (
    <CoinContentBox>
      <CoinContentIcon
        src={dataCoin.image.large}
        alt={`Картинка ${dataCoin.name}'a`}
      />
      <Typography>Наименование: {dataCoin.name}</Typography>
      <Typography>Дата создания: {convertedDate}</Typography>
      <Typography>Рейтинг GeckoCoin: {dataCoin.market_cap_rank}</Typography>
      <CoinDesc
        dangerouslySetInnerHTML={{ __html: dataCoin.description.en }}
      ></CoinDesc>
    </CoinContentBox>
  );
};

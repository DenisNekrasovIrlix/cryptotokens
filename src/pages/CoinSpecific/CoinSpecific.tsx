import React from "react";
import Button from "@mui/material/Button";
import {
  useGetDataCoinQuery,
  useGetHistoricalDataSpecificCoinQuery,
} from "api/coins/coins.api";
import { Loader } from "components/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { Error } from "components/Error";
import { CoinChart } from "components/CoinChart";
import { CoinContent } from "components/CointContent";

// Страница конкретной криптовалюты
export const CoinSpecific = function () {
  const navigate = useNavigate();
  const handleBackPage = () => navigate(-1);
  const { idSpecific } = useParams();
  const params = {
    id: idSpecific as string,
    time: "max" as "max",
  };
  const { data: dataHistorical, isError: isErrorHistorical } =
    useGetHistoricalDataSpecificCoinQuery(params);
  const { data: dataCoin, isError: isErrorDataCoin } = useGetDataCoinQuery(
    idSpecific as string
  );
  const isError = isErrorHistorical || isErrorDataCoin;
  const isLoading =
    (!dataHistorical && !isErrorHistorical) || (!dataCoin && !isErrorDataCoin);
  const isLoadCoinChart = dataHistorical && dataCoin && !isErrorHistorical;
  const isLoadCoinContent = dataCoin && !isErrorDataCoin;
  return (
    <>
      <Button variant={"contained"} onClick={handleBackPage}>
        Вернуться
      </Button>
      {isError && <Error text={"Произошла ошибка при загрузке данных!"} />}
      {isLoading && <Loader />}
      {isLoadCoinChart && (
        <CoinChart dataCoin={dataCoin} dataHistorical={dataHistorical} />
      )}
      {isLoadCoinContent && <CoinContent dataCoin={dataCoin} />}
    </>
  );
};

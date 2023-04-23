import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { IOptionsCoinChart, IPropsCoinChart } from "./types";

// Компонент графика, отображающую историю стоимости криптовалюты
export const CoinChart: React.FC<IPropsCoinChart> = function ({
  dataHistorical,
  dataCoin,
}) {
  let options = {} as IOptionsCoinChart;
  if (dataHistorical && dataCoin) {
    options = {
      ...options,
      title: {
        text: dataCoin.name,
      },
      series: [
        {
          name: dataCoin.name,
          data: [...(dataHistorical.prices as [number, number][])],
        },
      ],
    };
  }

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </>
  );
};

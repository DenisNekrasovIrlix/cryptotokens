import { IReturnDataPrice, IArgsDataPrice, IParsePrice } from "./types";

// Обрезает количество знаков после запятой до {numberParse}
export const parsePrice: IParsePrice = function (dataWithPrice, numberParse) {
  const newDataWithPrice: IArgsDataPrice = {};
  for (let index in dataWithPrice) {
    newDataWithPrice[index] = Number(
      (dataWithPrice[index] as number).toFixed(numberParse)
    );
  }
  return newDataWithPrice as unknown as IReturnDataPrice;
};

// Определяет уменьшилась стоимость криптовалюты или увеличилась
export const getChangeSale = function (number: number): boolean {
  if (number < 0) return false;
  return true;
};

// Парсер даты создания криптовалюты
export const parseDateGenesis = function (date: string): Date {
  const dateArray = date.split("-") as [string, string, string];
  const updatedDate = new Date(+dateArray[0], +dateArray[1], +dateArray[2]);
  return updatedDate;
};

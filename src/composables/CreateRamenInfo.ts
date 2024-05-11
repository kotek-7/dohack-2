import { RamenInfo, RamenType, RawRamenInfo, SizeType, ToppingType } from "../types";

// 生の入力データを受け取って、RamenInfoに変換
export function createRamenInfo(rawRamenInfo: RawRamenInfo): RamenInfo {
  let resultRamenType: RamenType;
  let resultSize: SizeType;
  let resultToppings: ToppingType[];
  let resultEatsSoup: boolean;
  let resultSecondsCount: number;
  let resultDate: string;

  if (rawRamenInfo.ramenType != "") {
    resultRamenType = rawRamenInfo.ramenType;
  } else {
    throw new Error("Select ramen type!");
  }
  resultSize = rawRamenInfo.size;
  resultToppings = rawRamenInfo.toppings;
  resultEatsSoup = rawRamenInfo.eatsSoup;
  resultSecondsCount = rawRamenInfo.asksSeconds ? rawRamenInfo.secondsCount : 0;
  resultDate = rawRamenInfo.date;

  return {
    ramenType: resultRamenType,
    size: resultSize,
    toppings: resultToppings,
    eatsSoup: resultEatsSoup,
    secondsCount: resultSecondsCount,
    date: resultDate,
  };
}

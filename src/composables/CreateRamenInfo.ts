import { RamenInfo, RamenType, ToppingType } from "../types";
import NewRamen from "../components/NewRamen.vue";
export function createRamenInfo(
  ramenParams: InstanceType<typeof NewRamen>
): RamenInfo {
  let resultRamenType: RamenType;
  let resultToppings: ToppingType[];
  let resultEatsSoup: boolean;
  let resultSecondsCount: number;
  if (ramenParams.selectedRamen != "") {
    resultRamenType = ramenParams.selectedRamen;
  } else {
    throw new Error("Select ramen type!");
  }
  resultToppings = ramenParams.selectedToppings;
  resultEatsSoup = ramenParams.eatsSoup;
  resultSecondsCount = ramenParams.asksSeconds ? ramenParams.secondsCount : 0;

  return {
    ramenType: resultRamenType,
    toppings: resultToppings,
    eatsSoup: resultEatsSoup,
    secondsCount: resultSecondsCount,
  };
}

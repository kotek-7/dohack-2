import { deserializeDate } from "./DeserializeDate";
import RamenData from "./RamenData";
import { fetchAndParseLocalRamens } from "./FetchAndParseLocalRamens";

// 今月の合計カロリーを返す
export function computeCalorieInMonth() {
  const ramens = fetchAndParseLocalRamens();
  const ramensInMonth = ramens.filter(
    (ramen) =>
      deserializeDate(ramen.date).getMonth == new Date().getMonth &&
      deserializeDate(ramen.date).getFullYear == new Date().getFullYear
  );
  let resultCalorie: number = 0;
  ramensInMonth.forEach((ramen) => {
    const ramenData = RamenData.filter((ramenData) => ramenData.value == ramen.ramenType)[0];
    if (ramen.eatsSoup) {
      resultCalorie += ramenData.calorie;
    } else {
      resultCalorie += ramenData.noSoup.calorie;
    }
  });
  return Math.round(resultCalorie);
}

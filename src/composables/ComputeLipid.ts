import { deserializeDate } from "./DeserializeDate";
import RamenData from "./RamenData";
import { fetchAndParseLocalRamens } from "./FetchAndParseLocalRamens";

// 今月の合計脂質を返す
export function computeLipidInMonth() {
  const ramens = fetchAndParseLocalRamens();
  const ramensInMonth = ramens.filter(
    (ramen) =>
      deserializeDate(ramen.date).getMonth == new Date().getMonth &&
      deserializeDate(ramen.date).getFullYear == new Date().getFullYear
  );
  let resultLipid: number = 0;
  ramensInMonth.forEach((ramen) => {
    const ramenData = RamenData.filter((ramenData) => ramenData.value == ramen.ramenType)[0];
    if (ramen.eatsSoup) {
      resultLipid += ramenData.lipid;
    } else {
      resultLipid += ramenData.noSoup.lipid;
    }
  });
  return Math.round(resultLipid * 10) / 10;
}

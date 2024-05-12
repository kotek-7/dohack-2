import { deserializeDate } from "./DeserializeDate";
import RamenData from "./RamenData";
import { fetchAndParseLocalRamens } from "./FetchAndParseLocalRamens";

// 今月の合計塩を返す
export function computeSaltInMonth() {
  const ramens = fetchAndParseLocalRamens();
  const ramensInMonth = ramens.filter(
    (ramen) =>
      deserializeDate(ramen.date).getMonth == new Date().getMonth &&
      deserializeDate(ramen.date).getFullYear == new Date().getFullYear
  );
  let resultSalt: number = 0;
  ramensInMonth.forEach((ramen) => {
    const ramenData = RamenData.filter((ramenData) => ramenData.value == ramen.ramenType)[0];
    if (ramen.eatsSoup) {
      resultSalt += ramenData.salt;
    } else {
      resultSalt += ramenData.noSoup.salt;
    }
  });
  return Math.round(resultSalt * 10) / 10;
}

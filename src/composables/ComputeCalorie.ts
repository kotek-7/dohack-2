import { deserializeDate } from "./DeserializeDate";
import { fetchAndParseLocalRamens } from "./FetchAndParseLocalRamens";
import { RamenInfo } from "../types";
import { searchRamen } from "./SearchRamen";

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
    resultCalorie += computeCalorie(ramen);
  });
  return Math.round(resultCalorie);
}

export function computeCalorie(ramen: RamenInfo) {
  let resultCalorie: number = 0;
  if (ramen.eatsSoup) {
    resultCalorie += searchRamen(ramen).calorie;
  } else {
    resultCalorie += searchRamen(ramen).noSoup.calorie;
  }
  switch (ramen.size) {
    case "s":
      resultCalorie /= 0.7;
      break;
    case "m":
      resultCalorie /= 1;
      break;
    case "l":
      resultCalorie /= 1.5;
      break;
    case "xl":
      resultCalorie /= 2;
      break;
  }
  resultCalorie += 199.5 * ramen.secondsCount;
  if (ramen.toppings.includes("egg")) resultCalorie += 73;
  if (ramen.toppings.includes("char-siu")) resultCalorie += 34;
  return Math.round(resultCalorie);
}

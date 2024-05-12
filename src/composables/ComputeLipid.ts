import { deserializeDate } from "./DeserializeDate";
import { fetchAndParseLocalRamens } from "./FetchAndParseLocalRamens";
import { RamenInfo } from "../types";
import { searchRamen } from "./SearchRamen";

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
    resultLipid += computeLipid(ramen);
  });
  return Math.round(resultLipid * 10) / 10;
}

export function computeLipid(ramen: RamenInfo) {
  let resultLipid: number = 0;
  if (ramen.eatsSoup) {
    resultLipid += searchRamen(ramen).lipid;
  } else {
    resultLipid += searchRamen(ramen).noSoup.lipid;
  }
  switch (ramen.size) {
    case "s":
      resultLipid /= 0.7;
      break;
    case "m":
      resultLipid /= 1;
      break;
    case "l":
      resultLipid /= 1.5;
      break;
    case "xl":
      resultLipid /= 2;
      break;
  }
  if (ramen.toppings.includes("egg")) resultLipid += 5.3;
  if (ramen.toppings.includes("char-siu")) resultLipid += 1.6;
  return Math.round(resultLipid * 10) / 10;
}

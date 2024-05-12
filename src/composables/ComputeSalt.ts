import { deserializeDate } from "./DeserializeDate";
import { fetchAndParseLocalRamens } from "./FetchAndParseLocalRamens";
import { RamenInfo } from "../types";
import { searchRamen } from "./SearchRamen";

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
    resultSalt += computeSalt(ramen);
  });
  return Math.round(resultSalt * 10) / 10;
}

export function computeSalt(ramen: RamenInfo) {
  let resultSalt: number = 0;
  if (ramen.eatsSoup) {
    resultSalt += searchRamen(ramen).salt;
  } else {
    resultSalt += searchRamen(ramen).noSoup.salt;
  }
  switch (ramen.size) {
    case "s":
      resultSalt /= 0.7;
      break;
    case "m":
      resultSalt /= 1;
      break;
    case "l":
      resultSalt /= 1.5;
      break;
    case "xl":
      resultSalt /= 2;
      break;
  }
  if (ramen.toppings.includes("egg")) resultSalt += 0.2;
  if (ramen.toppings.includes("char-siu")) resultSalt += 0.2;
  return Math.round(resultSalt * 10) / 10;
}

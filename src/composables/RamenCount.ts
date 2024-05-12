import { deserializeDate } from "./DeserializeDate";
import { fetchAndParseLocalRamens } from "./FetchAndParseLocalRamens";

export function ramenCountInMonth() {
  const ramens = fetchAndParseLocalRamens();
  const ramensInMonth = ramens.filter(
    (ramen) =>
      deserializeDate(ramen.date).getMonth == new Date().getMonth &&
      deserializeDate(ramen.date).getFullYear == new Date().getFullYear
  );
  return ramensInMonth.length;
}

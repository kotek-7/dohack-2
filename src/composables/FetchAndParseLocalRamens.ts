import { RamenInfo } from "../types";

// localStorageからデータを読み取ってRamensInfo[]にデシリアライズして返す
export function fetchAndParseLocalRamens() {
  const ramensString = localStorage.getItem("ramens") ?? "[]";
  const ramens = JSON.parse(ramensString) as RamenInfo[];
  return ramens;
}

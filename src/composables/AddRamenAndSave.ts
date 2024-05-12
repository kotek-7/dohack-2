import { RamenInfo } from "../types";
import { fetchAndParseLocalRamens } from "./FetchAndParseLocalRamens";

// RamenInfoを受け取って、localStorageの配列に追加する
export function addRamenAndSave(ramenInfo: RamenInfo) {
  const currentRamens = fetchAndParseLocalRamens();

  let ramensTemp: RamenInfo[];

  try {
    ramensTemp = currentRamens;
    ramensTemp.push(ramenInfo);
  } catch (e) {
    console.log("Data was broken so reset data.");
    ramensTemp = [];
  }
  const newRamensString = JSON.stringify(ramensTemp);

  console.log(newRamensString);

  localStorage.setItem("ramens", newRamensString);
}

import { RamenInfo } from "../types";

// RamenInfoを受け取って、localStorageの配列に追加する
export function addRamenAndSave(ramenInfo: RamenInfo) {
  const currentRamensString = localStorage.getItem("ramens") ?? "[]";
  const currentRamens = JSON.parse(currentRamensString) as RamenInfo[];

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

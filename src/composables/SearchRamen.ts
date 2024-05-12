import { RamenInfo } from "../types";
import RamenData from "./RamenData";

export function searchRamen(ramen: RamenInfo) {
  return RamenData.filter((ramenData) => ramenData.value == ramen.ramenType)[0];
}

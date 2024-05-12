export const ramenTypeArray = [
  "shoyu",
  "tonkotsu",
  "salt",
  "yokohama",
  "jiro",
  "aburasoba",
  "tantanmen",
  "toripaitan",
  "kitakata",
  "hakata",
  "sapporo",
] as const;
export type RamenType = (typeof ramenTypeArray)[number];
export type SizeType = "xl" | "l" | "m" | "s";
export type ToppingType = "egg" | "char-siu";
export type RawRamenInfo = {
  ramenType: RamenType | "";
  size: SizeType;
  toppings: ToppingType[];
  asksSeconds: boolean;
  eatsSoup: boolean;
  secondsCount: number;
  date: string;
};
export type RamenInfo = {
  ramenType: RamenType;
  size: SizeType;
  toppings: ToppingType[];
  eatsSoup: boolean;
  secondsCount: number;
  date: string;
};
export type RamenData = {
  name: string;
  value: RamenType;
  calorie: number;
  lipid: number;
  salt: number;
  noSoup: {
    calorie: number;
    lipid: number;
    salt: number;
  };
};

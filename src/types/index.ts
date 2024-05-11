export type RamenType = "二郎系" | "家系" | "油そば" | "醤油ラーメン";
export type SizeType = "特大" | "大" | "並" | "小";
export type ToppingType = "卵" | "チャーシュー";
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

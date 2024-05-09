export type RamenType = "二郎系" | "家系" | "油そば" | "醤油ラーメン";
export type ToppingType = "卵" | "チャーシュー";
export type RamenInfo = {
  ramenType: RamenType;
  toppings: ToppingType[];
  eatsSoup: boolean;
  secondsCount: number;
};

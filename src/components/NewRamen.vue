<script setup lang="ts">
  import { ref } from "vue";
  import { RamenType, ToppingType } from "../types";

  function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 月は0から始まるため+1する
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
  const today = ref<string>(formatDate(new Date()));

  const selectedRamen = ref<RamenType | "">("");
  const selectedToppings = ref<ToppingType[]>([]);
  const eatsSoup = ref(false);
  const asksSeconds = ref(false);
  const secondsCount = ref(1);

  defineExpose({
    selectedRamen,
    selectedToppings,
    eatsSoup,
    asksSeconds,
    secondsCount,
  });
</script>

<template>
  <form>
    <div>
      <select name="mode-select">
        <option>新しいラーメン作成</option>
        <option>ラーメン一覧から選択</option>
      </select>
    </div>
    <div>
      <label for="ramen-select">種類を選択</label>
      <select id="ramen-select" name="ramen-select" v-model="selectedRamen">
        <option disabled value="">選択してください</option>
        <option>二郎系</option>
        <option>家系</option>
        <option>油そば</option>
        <option>醤油ラーメン</option>
      </select>
    </div>
    <div>
      <label for="topping-select" multiple>トッピング</label>
      <select
        id="topping-select"
        name="topping-select"
        v-model="selectedToppings"
        placeholder="なし"
        multiple
      >
        <option>チャーシュー</option>
        <option>たまご</option>
      </select>
    </div>
    <div>
      <input type="checkbox" id="eats-soup" v-model="eatsSoup" />
      <label for="eats-soup">スープのんだ？</label>
    </div>
    <div>
      <input type="checkbox" id="asks-seconds" v-model="asksSeconds" />
      <label for="asks-seconds">替え玉した？</label>
    </div>
    <div :class="{ hidden: !asksSeconds }">
      <input
        type="number"
        id="seconds-count"
        placeholder="何回替え玉した？"
        v-model="secondsCount"
      />回
    </div>
    <div>
      <label for="eat-on">日付</label>
      <input type="date" id="eat-on" :value="today" />
    </div>
  </form>
</template>

<style scoped>
  .hidden {
    display: none;
  }
</style>

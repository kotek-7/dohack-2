<script setup lang="ts">
import { ref } from "vue";
import { RamenType, RawRamenInfo, SizeType, ToppingType } from "../types";

const emit = defineEmits<{
  submit: [rawRamenInfo: RawRamenInfo];
}>();

const currentMode = ref<"create" | "history">("create");

const selectedRamen = ref<RamenType | "">("");
const selectedSize = ref<SizeType>("並");
const selectedToppings = ref<ToppingType[]>([]);
const eatsSoup = ref(false);
const asksSeconds = ref(false);
const secondsCount = ref(1);
const date = ref(getCurrentDate());

// yyyy-MM-ddの形式で今日の日付を取得
function getCurrentDate(): string {
  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// ラーメンを送信ボタンのイベントハンドラ
function submitButtonHandler() {
  const rawRamenInfo: RawRamenInfo = {
    ramenType: selectedRamen.value,
    size: selectedSize.value,
    toppings: selectedToppings.value,
    asksSeconds: asksSeconds.value,
    eatsSoup: eatsSoup.value,
    secondsCount: secondsCount.value,
    date: date.value,
  };
  emit("submit", rawRamenInfo);
}
</script>

<template>
  <div>
    <select name="mode-select" v-model="currentMode">
      <option value="create">新しいラーメン作成</option>
      <option value="history">ラーメン一覧から選択</option>
    </select>
  </div>
  <div v-if="currentMode == 'create'">
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
      <label for="size-select">サイズを選択</label>
      <select id="size-select" name="size-select" v-model="selectedSize">
        <option>特大</option>
        <option>大</option>
        <option>並</option>
        <option>小</option>
      </select>
    </div>
    <div>
      <label for="topping-select" multiple>トッピング</label>
      <select id="topping-select" name="topping-select" v-model="selectedToppings" placeholder="なし" multiple>
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
      <input type="number" max="5" min="1" id="seconds-count" placeholder="何回替え玉した？" v-model="secondsCount" />回
    </div>
    <div>
      <label for="eat-on">日付</label>
      <input type="date" id="eat-on" v-model="date" />
    </div>
  </div>
  <div v-if="currentMode == 'history'">
    <ul>
      <li>Ramen 1</li>
      <li>Ramen 1</li>
      <li>Ramen 1</li>
      <li>Ramen 1</li>
      <li>Ramen 1</li>
    </ul>
  </div>
  <button @click="submitButtonHandler">送信！！！</button>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>

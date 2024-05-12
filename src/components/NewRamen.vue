<script setup lang="ts">
import { ref } from "vue";
import { RamenType, RawRamenInfo, SizeType, ToppingType, ramenTypeArray } from "../types";
import {
  ListboxContent,
  ListboxItem,
  ListboxRoot,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from "radix-vue";
import { useRouter } from "vue-router";
import { createRamenInfo } from "../composables/CreateRamenInfo";
import { addRamenAndSave } from "../composables/AddRamenAndSave";
import RamenData from "../composables/RamenData";

const emit = defineEmits<{
  submit: [rawRamenInfo: RawRamenInfo];
}>();

const router = useRouter();
const currentMode = ref<"create" | "history">("create");

const selectedRamen = ref<RamenType | "">("");
const selectedSize = ref<SizeType>("m");
const selectedToppings = ref<ToppingType[]>([]);
const eatsSoup = ref(false);
const asksSeconds = ref(false);
const secondsCount = ref(1);
const date = ref(getCurrentDate());

function returnButtonHandler() {
  router.push("/");
}

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
  if (rawRamenInfo.ramenType == "") {
    console.log("ramenType was empty");
    alert("ラーメンの種類を選択して！");
    return;
  }
  const ramenInfo = createRamenInfo(rawRamenInfo);
  addRamenAndSave(ramenInfo);
  alert(ramenInfo);
  router.push("/");
}
</script>

<template>
  <div class="font-kiwi bg-[#eae8e1] text-[#474a4d] min-h-[100vh]">
    <div class="fixed top-0 left-0 h-8 w-full top-line" />
    <div class="text-center">
      <button
        @click="returnButtonHandler"
        class="absolute rounded-full p-2 top-20 left-4 transition active:bg-black/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 15 15">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M6.854 3.146a.5.5 0 0 1 0 .708L3.707 7H12.5a.5.5 0 0 1 0 1H3.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div class="h-32" />
      <div class="text-3xl">今日のラーメン</div>
      <div class="mt-6">
        <select
          name="mode-select"
          v-model="currentMode"
          class="rounded-full bg-white min-w-2/3 mx-auto pl-8 pr-6 py-3 appearance-none"
        >
          <option value="create">新しいラーメン作成</option>
          <option value="history">ラーメン一覧から選択</option>
        </select>
      </div>
      <div v-if="currentMode == 'create'">
        <div class="flex justify-center *:mx-2 mt-8">
          <div
            class="rounded-full bg-[#eb3031] text-white w-24 h-24 p-2 flex flex-col justify-center transition filter active:brightness-90"
          >
            <label for="ramen-select" class="text-sm">種類</label>
            <select
              id="ramen-select"
              name="ramen-select"
              v-model="selectedRamen"
              class="*:text-[#474A4D] bg-transparent border-none appearance-none text-center text-xl *:text-sm"
            >
              <option disabled value="">選択...</option>
              <option v-for="(ramenType, i) in ramenTypeArray" :value="ramenType" :key="ramenType">
                {{ RamenData[i].name }}
              </option>
            </select>
          </div>
          <div
            class="rounded-full bg-[#eb3031] text-white w-24 h-24 p-2 flex flex-col justify-center transition filter active:brightness-90"
          >
            <label for="size-select">サイズ</label>
            <select
              id="size-select"
              name="size-select"
              v-model="selectedSize"
              class="*:text-[#474A4D] bg-transparent border-none appearance-none text-center text-xl *:text-sm"
            >
              <option value="xl">特大</option>
              <option value="l">大</option>
              <option value="m">並</option>
              <option value="s">小</option>
            </select>
          </div>
          <div
            class="rounded-full w-24 h-24 p-2 flex flex-col justify-center transition filter active:brightness-90"
            :class="{ 'bg-white *:text-[#474a4d]': !eatsSoup, 'bg-[#eb3031] text-white': eatsSoup }"
          >
            <input type="checkbox" id="eats-soup" v-model="eatsSoup" class="hidden" />
            <label for="eats-soup">スープ</label>
            <label for="eats-soup" v-if="eatsSoup">飲んだ</label>
            <label for="eats-soup" v-if="!eatsSoup">飲んでない</label>
          </div>
        </div>
        <div class="flex justify-center mt-8">
          <div class="bg-white rounded-xl px-6 py-4 ring-2 ring-[#eb3031] h-fit transition filter active:brightness-90">
            <div>
              <input type="checkbox" id="asks-seconds" v-model="asksSeconds" class="hidden" />
              <label for="asks-seconds">替え玉</label>
            </div>
            <div class="flex justify-center items-center" :class="{ hidden: !asksSeconds }">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 15 15">
                <path
                  fill="#eb3031"
                  fill-rule="evenodd"
                  d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877M1.827 7.5a5.673 5.673 0 1 1 11.346 0a5.673 5.673 0 0 1-11.346 0m8.332-1.962a.5.5 0 0 0-.818-.576L6.52 8.972L5.357 7.787a.5.5 0 0 0-.714.7L6.227 10.1a.5.5 0 0 0 .765-.062z"
                  clip-rule="evenodd"
                />
              </svg>
              <div>
                <input
                  type="number"
                  max="5"
                  min="1"
                  id="seconds-count"
                  v-model="secondsCount"
                  class="px-2 text-center text-lg ml-1"
                />
                回
              </div>
            </div>
          </div>
          <PopoverRoot>
            <PopoverTrigger
              class="ml-4 bg-white rounded-xl px-6 py-4 ring-2 ring-[#eb3031] h-fit transition filter active:brightness-90 text-center"
            >
              トッピング
              <div class="text-sm mt-2" :class="{ hidden: selectedToppings.length == 0 }">
                <div v-for="topping in selectedToppings">{{ topping }}</div>
              </div>
            </PopoverTrigger>
            <PopoverPortal>
              <PopoverContent class="bg-white rounded-lg px-1 py-2 shadow-lg">
                <ListboxRoot v-model="selectedToppings" multiple>
                  <ListboxContent class="*:transition *:filter active:*:brightness-90 *:px-3 *:py-0.5 *:rounded">
                    <ListboxItem
                      value="char-siu"
                      class="font-kiwi"
                      :class="{
                        'bg-[#eb3031] text-white': selectedToppings.includes('char-siu'),
                        'bg-white': !selectedToppings.includes('char-siu'),
                      }"
                    >
                      チャーシュー
                    </ListboxItem>
                    <ListboxItem
                      value="egg"
                      class="font-kiwi"
                      :class="{
                        'bg-[#eb3031] text-white': selectedToppings.includes('egg'),
                        'bg-white': !selectedToppings.includes('egg'),
                      }"
                    >
                      タマゴ
                    </ListboxItem>
                  </ListboxContent>
                </ListboxRoot>
              </PopoverContent>
            </PopoverPortal>
          </PopoverRoot>
        </div>
        <div class="mt-8">
          <input type="date" id="eat-on" v-model="date" class="px-16 py-2 rounded-full text-lg" />
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
      <button
        @click="submitButtonHandler"
        class="px-8 py-3 bg-white active:bg-[#eb3031] active:text-white transition rounded-full mt-8"
      >
        送信！！！
      </button>
    </div>
    <div>
      <img
        class="fixed bottom-[-3.3rem] left-[50%] right-[50%] [transform:translate(-50%,-50%)] h-36"
        src="../assets/logo.png"
      />
      <div class="fixed bottom-0 left-0 h-8 w-full bottom-line"></div>
    </div>
  </div>
</template>

<style scoped>
.font-kiwi {
  font-family: "Kiwi Maru", serif;
  font-weight: 500;
  font-style: normal;
}

.top-line {
  background-image: url("../assets/line.png");
  background-size: cover;
}
@media screen and (min-width: 570px) {
  .top-line {
    background-size: contain;
  }
}
.bottom-line {
  background-image: url("../assets/line.png");
  background-size: cover;
}
@media screen and (min-width: 570px) {
  .bottom-line {
    background-size: contain;
  }
}
</style>

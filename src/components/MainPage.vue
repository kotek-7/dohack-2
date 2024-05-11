<script setup lang="ts">
import { ref } from "vue";
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "radix-vue";
import NewRamen from "./NewRamen.vue";
import { RawRamenInfo } from "../types";
import { createRamenInfo } from "../composables/CreateRamenInfo";
import { addRamenAndSave } from "../composables/AddRamenAndSave";
import { useRouter } from "vue-router";

const kinraStreak = ref(4);
const calorie = ref(24000);
const fat = ref(320);
const carb = ref(460);

const isOpen = ref(false);

const router = useRouter();

async function createNewHandler() {
  await router.push({ name: "newRamen" });
}

function submitHandler(rawRamenInfo: RawRamenInfo) {
  if (rawRamenInfo.ramenType == "") {
    console.log("ramenType was empty");
    alert("ラーメンの種類を選択して！");
    return;
  }
  const ramenInfo = createRamenInfo(rawRamenInfo);
  addRamenAndSave(ramenInfo);
  alert(ramenInfo);
  isOpen.value = false;
}
</script>

<template>
  <div class="wrapper">
    <div class="top-line"></div>
    <div class="container">
      <div class="spacer" />
      <div class="susuranai">SUSURANAI</div>
      <div class="analysis">今週の記録</div>
      <div class="container-2">
        <div class="count-container">
          <div>
            <span class="">計</span>
            <div>
              <span class="count">{{ kinraStreak }}</span
              >回
            </div>
          </div>
        </div>
        <div class="params-container">
          <div class="param">
            <img src="../assets/icon_calorie.png" class="icon" />
            <p>{{ calorie }} kcal</p>
          </div>
          <div class="param">
            <img src="../assets/icon_carb.png" class="icon" />
            <p>{{ fat }} g</p>
          </div>
          <div class="param">
            <img src="../assets/icon_salt.png" class="icon" />
            <p>{{ carb }} g</p>
          </div>
        </div>
      </div>
      <div class="calendar">Calendar</div>
      <button class="create-button" @click="createNewHandler">記録する</button>
      <div class="spacer" />
    </div>
    <div class="bottom-images">
      <img class="logo" src="../assets/logo.png" />
      <div class="bottom-line"></div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@500&display=swap");

.wrapper {
  font-family: "Kiwi Maru", serif;
  font-weight: 500;
  font-style: normal;
  color: #474a4d;
  background-color: #eae8e1;
  min-height: 100vh;
}
.container {
  text-align: center;
}
.spacer {
  height: 8rem;
}
.container-2 {
  display: flex;
  justify-content: space-evenly;
  margin: 0 4rem;
}
.susuranai {
  font-family: "Baloo Bhai 2", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 2.4rem;
  letter-spacing: 0.2rem;
}
.analysis {
  margin: 2rem auto;
  width: 50%;
  padding: 0.6rem 2rem;
  border-radius: 100vh;
  background-color: white;
}
.count-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.count {
  font-size: 3rem;
  margin-right: 1rem;
}
.params-container {
  text-align: start;
}
p {
  margin: 0 0;
}
.param {
  margin: 1rem 0;
  display: flex;
  align-items: center;
}
.icon {
  display: block;
  height: 1.4rem;
  margin-right: 1rem;
}
.calendar {
  width: 70vw;
  height: 10rem;
  background-color: white;
  margin: 0 auto;
  margin-top: 2rem;
}
.create-button {
  margin: 2rem auto;
  width: fit-content;
  padding: 0.8rem 2rem;
  border-radius: 100vh;
  background-color: white;
  transition: all 0.1s;
  border: 0;
}
.create-button:active {
  background-color: #eb3031;
  color: white;
}
.top-line {
  position: fixed;
  top: 0;
  left: 0;
  height: 2rem;
  width: 100%;
  background-image: url("../assets/line.png");
  background-size: cover;
}
@media screen and (min-width: 570px) {
  .top-line {
    background-size: contain;
  }
}
.logo {
  z-index: 0;
  position: fixed;
  bottom: -3.3rem;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  height: 150px;
}
.bottom-line {
  z-index: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 2rem;
  width: 100%;
  background-image: url("../assets/line.png");
  background-size: cover;
}
@media screen and (min-width: 570px) {
  .bottom-line {
    background-size: contain;
  }
}
</style>

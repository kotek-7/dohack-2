<script setup lang="ts">
import { useRouter } from "vue-router";
import { computeCalorieInMonth } from "../composables/ComputeCalorie";
import { computeLipidInMonth } from "../composables/ComputeLipid";
import { computeSaltInMonth } from "../composables/ComputeSalt";
import { ramenCountInMonth } from "../composables/RamenCount";
import { Calendar } from "v-calendar";
import "v-calendar/style.css";

const router = useRouter();

const calorieInMonth = computeCalorieInMonth();
const lipidInMonth = computeLipidInMonth();
const saltInMonth = computeSaltInMonth();
const countInMonth = ramenCountInMonth();

async function createNewHandler() {
  await router.push({ name: "newRamen" });
}

function historyHandler() {
  router.push({ name: "history" });
}
</script>

<template>
  <div class="wrapper">
    <div class="top-line"></div>
    <div class="container">
      <div class="spacer" />
      <div class="susuranai">SUSURANAI</div>
      <div class="analysis">今月の記録</div>
      <div class="container-2">
        <div class="count-container">
          <div>
            <span class="">計</span>
            <div>
              <span class="count">{{ countInMonth }}</span
              >回
            </div>
          </div>
        </div>
        <div class="params-container">
          <div class="param">
            <img src="../assets/icon_calorie.png" class="icon" />
            <p>{{ calorieInMonth }} kcal</p>
          </div>
          <div class="param">
            <img src="../assets/icon_carb.png" class="icon" />
            <p>{{ lipidInMonth }} g</p>
          </div>
          <div class="param">
            <img src="../assets/icon_salt.png" class="icon" />
            <p>{{ saltInMonth }} g</p>
          </div>
        </div>
      </div>
      <div class="calendar">
        <Calendar />
      </div>
      <button class="create-button" @click="createNewHandler">記録する</button>
      <button
        class="w-12 h-12 rounded-full absolute bottom-12 right-4 bg-white p-2 flex justify-center items-center active:bg-[#eb3031] active:text-white transition"
        @click="historyHandler"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1.6rem" height="1.6rem" viewBox="0 0 15 15">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877M1.827 7.5a5.673 5.673 0 1 1 11.346 0a5.673 5.673 0 0 1-11.346 0M8 4.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .146.354l2 2a.5.5 0 0 0 .708-.708L8 7.293z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div class="h-64" />
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

<script setup lang="ts">
import { useRouter } from "vue-router";
import { fetchAndParseLocalRamens } from "../composables/FetchAndParseLocalRamens";
import { searchRamen } from "../composables/SearchRamen";
import { ref } from "vue";
import { RamenInfo } from "../types";
import { computeCalorie } from "../composables/ComputeCalorie";

const router = useRouter();

const selectedCard = ref(0);

function returnButtonHandler() {
  router.push("/");
}

function cardClickHandler(index: number) {
  selectedCard.value = index;
}

function submitButtonHandler(ramenInfo: RamenInfo) {
  router.push({
    name: "newRamen",
    params: {
      ramenType: ramenInfo.ramenType,
      size: ramenInfo.size,
      toppings: ramenInfo.toppings,
      secondsCount: ramenInfo.secondsCount,
      date: ramenInfo.date,
    },
  });
}
const ramens = fetchAndParseLocalRamens();
</script>

<template>
  <div class="top-line"></div>
  <div class="page">
    <button @click="returnButtonHandler" class="fixed rounded-full p-2 top-11 left-4 transition active:bg-black/10">
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 15 15">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M6.854 3.146a.5.5 0 0 1 0 .708L3.707 7H12.5a.5.5 0 0 1 0 1H3.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <div class="top-space"></div>
    <button
      v-for="(ramen, i) in ramens"
      class="container-box transition filter active:brightness-90"
      :class="{ 'ring-2 ring-[#eb3031]': selectedCard == i }"
      @click="cardClickHandler(i)"
    >
      <div class="ramen_name">
        <p>{{ searchRamen(ramen).name }}</p>
      </div>
      <div class="inner-container">
        <div class="calorie">
          <p>{{ computeCalorie(ramen) }} kcal</p>
        </div>

        <div class="date">
          <p>{{ ramen.date }}</p>
        </div>
      </div>
    </button>
    <div class="top-space"></div>
  </div>

  <div class="top-space"></div>
  <button
    @click="submitButtonHandler(ramens[selectedCard])"
    class="fixed bottom-32 bg-white shadow-lg px-4 py-3 transition rounded-full submit-button w-40 active:text-white active:bg-[#eb3031]"
  >
    選択
  </button>
  <div class="bottom-images">
    <img class="logo" src="../assets/logo.png" />
    <div class="bottom-line"></div>
  </div>
</template>

<style scoped>
.font-kiwi {
  font-family: "Kiwi Maru", serif;
  font-weight: 500;
  font-style: normal;
}
p {
  margin: 5px;
}
.ramen_name {
  text-align: center;
  font-size: 32px;
  margin: 0;
  font-weight: bold;
}

.calorie {
  text-align: center;
}

.date {
  text-align: center;
}

.inner-container {
  display: flex;
  justify-content: space-between;
  color: rgb(76, 76, 76);
}

.container-box {
  display: block;
  width: 90%;
  background: #ffffff;
  padding: 16px;
  border-radius: 16px;
  border: 2px solid rgb(234, 48, 49);
  margin: 10px auto;
}

.page {
  overflow-y: scroll;
  background-color: rgb(232, 232, 225);
  min-height: 100vh;
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
.submit-button {
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
}
@media screen and (min-width: 570px) {
  .bottom-line {
    background-size: contain;
  }
}
.top-space {
  height: 6rem;
}
</style>

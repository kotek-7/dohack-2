<script setup lang="ts">
import { useRouter } from "vue-router";
import { computeCalorie } from "../composables/ComputeCalorie";
import { computeLipid } from "../composables/ComputeLipid";
import { computeSalt } from "../composables/ComputeSalt";
import { fetchAndParseLocalRamens } from "../composables/FetchAndParseLocalRamens";
import { searchRamen } from "../composables/SearchRamen";

const ramens = fetchAndParseLocalRamens();

const router = useRouter();

function returnButtonHandler() {
  router.push("/");
}
</script>

<template>
  <div class="log">
    <button @click="returnButtonHandler" class="relative rounded-full p-2 top-9 left-4 transition active:bg-black/10">
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 15 15">
        <path
          fill="white"
          fill-rule="evenodd"
          d="M6.854 3.146a.5.5 0 0 1 0 .708L3.707 7H12.5a.5.5 0 0 1 0 1H3.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <h1>ラーメン履歴</h1>
  </div>
  <div class="page">
    <div class="mx-auto mt-20 text-center text-lg" :class="{ hidden: ramens.length != 0 }">
      まだ何もないようです....
    </div>
    <div v-for="ramen in ramens" class="container-box">
      <div class="ramen_name">
        <p>{{ searchRamen(ramen).name }}</p>
      </div>
      <div class="inner-container">
        <div class="calorie">
          <p>カロリー<br />{{ computeCalorie(ramen) }} kcal</p>
        </div>
        <div class="shishitsu">
          <p>脂質<br />{{ computeLipid(ramen) }} g</p>
        </div>
        <div class="toshitsu">
          <p>塩分<br />{{ computeSalt(ramen) }} g</p>
        </div>
      </div>
      <div class="date">
        <p>2024/05/10</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.log {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #f16666;
}

h1 {
  color: white;
  text-align: center;
}

p {
  margin: 5px;
}
.ramen_name {
  text-align: left;
  font-size: 25px;
  margin: 0;
  font-weight: bold;
}
.date {
  color: hsl(0, 0%, 56%);
  padding-top: 1rem;
  text-align: left;
}

.inner-container {
  margin-top: 1rem;
  color: rgb(76, 76, 76);
  display: flex;
  justify-content: space-around;
}

.container-box {
  background: #f4f4f4;
  padding: 2rem;
  border-radius: 10px;
  margin: 1rem 1rem;
  border: solid 2px #eb3031;
}

.page {
  overflow-y: scroll;
  background: #eae8e1;
  padding-top: 80px;
  min-height: 100vh;
}
</style>

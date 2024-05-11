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

const kinraStreak = ref(4);
const calorie = ref(24000);
const fat = ref(320);
const carb = ref(460);

const isOpen = ref(false);

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
  <DialogRoot v-model:open="isOpen">
    SUSURANAI
    <div>
      今月の🈲ラー
      <div>{{ kinraStreak }}日</div>
    </div>
    <div>
      <div>摂取カロリー{{ calorie }}kcal</div>
      <div>脂質{{ fat }}g</div>
      <div>糖質{{ carb }}g</div>
    </div>
    <div>Calendar</div>
    <DialogTrigger>ラーメン追加</DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="dialog-overlay" />
      <DialogContent class="dialog-content">
        <DialogTitle> 今日のラーメン </DialogTitle>
        <DialogDescription>
          <NewRamen ref="params" @submit="submitHandler" />
        </DialogDescription>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped>
.class {
  display: flex;
}
.dialog-overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  background-color: black;
  opacity: 0.7;
}
.dialog-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  max-height: 100vh;
  max-width: 100vw;
}
</style>

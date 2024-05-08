<script setup lang="ts">
  import { ref } from "vue";
  import {
    DialogRoot,
    DialogTrigger,
    DialogPortal,
    DialogOverlay,
    DialogContent,
  } from "radix-vue";
  import NewRamen from "./NewRamen.vue";

  const kinraStreak = ref(4);
  const calorie = ref(24000);
  const fat = ref(320);
  const carb = ref(460);
</script>

<template>
  <DialogRoot>
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
        <NewRamen />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped>
  .dialog-overlay {
    position: fixed;
    background-color: black;
    opacity: 0.5;
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

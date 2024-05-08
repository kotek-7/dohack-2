<script setup lang="ts">
  import { ref } from "vue";
  function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 月は0から始まるため+1する
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
  const today = ref<string>(formatDate(new Date()));
</script>

<template>
  <div>
    今日のラーメン
    <div>
      <select name="mode-select">
        <option>新しいラーメン作成</option>
        <option>ラーメン一覧から選択</option>
      </select>
    </div>
    <div>
      <label for="ramen-select">種類を選択</label>
      <select id="ramen-select" name="ramen-select">
        <option>二郎系</option>
        <option>家系</option>
        <option>油そば</option>
        <option>醤油ラーメン</option>
      </select>
    </div>
    <div>
      <label for="topping-select">トッピング</label>
      <select id="topping-select" name="topping-select">
        <option>チャーシュー</option>
        <option>たまご</option>
      </select>
    </div>
    <div>
      <input type="checkbox" id="eats-soup" name="eats-soup" checked />
      <label for="eats-soup">スープのんだ？</label>
    </div>
    <div>
      <input type="checkbox" id="asks-seconds" name="asks-seconds" checked />
      <label for="asks-seconds">替え玉した？</label>
    </div>
    <div>
      <label for="eat-on">日付</label>
      <input type="date" id="eat-on" name="eat-on" :value="today" />
    </div>
    <button>送信！</button>
  </div>
</template>

<style scoped></style>

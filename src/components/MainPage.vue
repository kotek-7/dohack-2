<script setup lang="ts">
  import { ref } from "vue";
</script>

<template>
  <h1>ラーメン美味しいよね</h1>
  <h2>おいしいね</h2>
  <h3>でも身体に悪いよ？</h3>
  <dev class="main-page-root">
    <form>
      <div>
        種類(こってり？あっさり？)
        <input type="text" />
      </div>

      <div>
        サイズ(大・中・小)
        <input type="text" />
      </div>

      <div>
        スープの種類
        <input type="text" />
      </div>
      <button type="submit">送信！！！！</button>
    </form>
  </dev>
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>

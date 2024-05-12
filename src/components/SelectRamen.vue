<script setup lang="ts"></script>

<template>
  <div class="top-line"></div>
  <div class="page">
    <div class="top-space"></div>
    <div class="container-box">
      <div class="ramen_name">
        <p>ラーメン</p>
      </div>
      <div class="inner-container">
        <div class="calorie">
          <p>100 kcal</p>
        </div>

        <div class="date">
          <p>2024/05/10</p>
        </div>
      </div>
    </div>
    <div class="container-box">
      <div class="ramen_name">
        <p>ラーメン</p>
      </div>
      <div class="inner-container">
        <div class="calorie">
          <p>100 kcal</p>
        </div>

        <div class="date">
          <p>2024/05/10</p>
        </div>
      </div>
    </div>
    <div class="container-box">
      <div class="ramen_name">
        <p>ラーメン</p>
      </div>
      <div class="inner-container">
        <div class="calorie">
          <p>100 kcal</p>
        </div>

        <div class="date">
          <p>2024/05/10</p>
        </div>
      </div>
    </div>
    <div class="container-box">
      <div class="ramen_name">
        <p>ラーメン</p>
      </div>
      <div class="inner-container">
        <div class="calorie">
          <p>100 kcal</p>
        </div>

        <div class="date">
          <p>2024/05/10</p>
        </div>
      </div>
    </div>
    <div class="container-box">
      <div class="ramen_name">
        <p>ラーメン</p>
      </div>
      <div class="inner-container">
        <div class="calorie">
          <p>100 kcal</p>
        </div>

        <div class="date">
          <p>2024/05/10</p>
        </div>
      </div>
    </div>
    <div class="container-box">
      <div class="ramen_name">
        <p>ラーメン</p>
      </div>
      <div class="inner-container">
        <div class="calorie">
          <p>100 kcal</p>
        </div>

        <div class="date">
          <p>2024/05/10</p>
        </div>
      </div>
    </div>
    <div class="container-box">
      <div class="ramen_name">
        <p>ラーメン</p>
      </div>
      <div class="inner-container">
        <div class="calorie">
          <p>100 kcal</p>
        </div>

        <div class="date">
          <p>2024/05/10</p>
        </div>
      </div>
    </div>
    <div class="container-box">
      <div class="ramen_name">
        <p>ラーメン</p>
      </div>
      <div class="inner-container">
        <div class="calorie">
          <p>100 kcal</p>
        </div>

        <div class="date">
          <p>2024/05/10</p>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-images">
    <img class="logo" src="../assets/logo.png" />
    <div class="bottom-line"></div>
  </div>
</template>

<style scoped>
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
  background: #ffffff;
  padding: 16px;
  border-radius: 16px;
  border: 2px solid rgb(234, 48, 49);
  margin: 10px 10px 20px 10px;
}

.page {
  overflow-y: scroll;
  background-color: rgb(232, 232, 225);
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
.top-space {
  height: 30px;
}
</style>

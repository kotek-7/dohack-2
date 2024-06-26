import { createApp } from "vue";
import "normalize.css";
import "./styles/style.css";
import App from "./App.vue";
import { createMemoryHistory, createRouter } from "vue-router";

import MainPage from "./components/MainPage.vue";
import NewRamen from "./components/NewRamen.vue";
import SelectRamen from "./components/SelectRamen.vue";
import RamenHistory from "./components/RamenHistory.vue";

const routes = [
  { path: "/", component: MainPage, name: "mainPage" },
  { path: "/newRamen", component: NewRamen, name: "newRamen", props: true },
  { path: "/selectRamen", component: SelectRamen, name: "selectRamen" },
  { path: "/history", component: RamenHistory, name: "history" },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

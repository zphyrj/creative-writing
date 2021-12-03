import { createApp } from "vue";
import App from "./App.vue";
const HomeGrid = () => import("./components/HomeGrid.vue");
const Piece = () => import("./components/Piece.vue");
const Loader = () => import("./components/Loader.vue");
const AuthorPage = () => import("./components/AuthorPage.vue");
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomeGrid },
  { path: "/loader", component: Loader },
  // dynamic route with params (:author)/(:title)
  { path: "/@:author", component: AuthorPage },
  { path: "/:id", component: Piece },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");

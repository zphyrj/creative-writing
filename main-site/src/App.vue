<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import Loader from "./components/Loader.vue";
const firebaseConfig = {
  apiKey: "AIzaSyBU_DHD0oIbR9kPWJj__NROYri74qXO0Ds",
  authDomain: "mvhsrrw.firebaseapp.com",
  projectId: "mvhsrrw",
  storageBucket: "mvhsrrw.appspot.com",
  messagingSenderId: "827861420424",
  appId: "1:827861420424:web:95baabf966372a6966523d",
};

const app = initializeApp(firebaseConfig);
const root = document.getElementById("app");
root.addEventListener("scroll", () => {
  if (root.scrollTop > 0) {
    root.classList.add("scrolled");
  } else {
    root.classList.remove("scrolled");
  }
});
const loaded = ref(false);
const router = useRouter();
const unsubscribeBefore = router.beforeEach(() => {
  unsubscribeBefore();
  const indexLoader = document.getElementById("index-loader");
  document.body.removeChild(indexLoader);
  console.log("beforeEach");
});

router.afterEach(() => {
  loaded.value = true;
});
router.beforeEach(() => {
  loaded.value = false;
});
</script>

<template>
  <nav>
    <router-link to="/"
      ><img class="logo" src="../media/logo.png" alt="Home"
    /></router-link>
  </nav>
  <div class="main">
    <router-view v-if="loaded"></router-view>
    <Loader v-else class="loader"></Loader>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--secondary-color);
  overflow: auto;
  height: 100%;
  position: relative;
}

.logo {
  height: 100%;
  aspect-ratio: 1 / 1;
  width: auto;
}

.loader {
  width: 100%;
  background-color: var(--secondary-color);
}

body {
  margin: 0;
  height: 100%;
}

html {
  --primary-color: #ffffff;
  --primary-color-variant: #f2f2f2;
  --secondary-color: #000000;
  --secondary-color-variant: #2c3e50;
  --accent-color: #ffb457;
  --accent-color-variant: hsl(33, 75%, 75%);
  font-family: "Atkinson Hyperlegible", sans-serif;
  height: 100%;
}

.italics {
  font-style: italic;
}

.quoted::before {
  content: '"';
}

.quoted::after {
  content: '"';
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  justify-content: center;
  position: sticky;
  background-color: var(--primary-color);
  top: 0;
  z-index: 1;
  transition: height 0.2s ease-in-out;
}

nav a {
  color: var(--secondary-color);
  text-decoration: none;
  height: 80%;
}

a:hover {
  text-decoration: underline;
}

#app.scrolled nav {
  border-bottom: none;
  box-shadow: 0 2px 2px var(--accent-color-variant);
  height: 3rem;
}

.main {
  margin: 1em;
  margin-top: 0.25em;
  position: relative;
}

a {
  color: inherit;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

.fade-enter-from {
  opacity: 0;
  transform: translate(0, 20vh);
}
.fade-enter-to {
  opacity: 1;
  transform: translate(0, 0);
}
.fade-enter-active,
.fade-leave-active {
  transition-property: transform, opacity, height;
  transition-duration: 0.5s;
  transform-origin: top center;
}
.fade-enter-active {
  transition-timing-function: ease, ease-out;
}
.fade-leave-active {
  transition-timing-function: ease-out;
}

.fade-leave-from {
  transform: scaleY(1);
  z-index: 5;
}
.fade-leave-to {
  transform: scaleY(0);
}
</style>

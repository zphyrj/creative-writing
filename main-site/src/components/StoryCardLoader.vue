<script setup>
import Loader from "./Loader.vue";
</script>

<template>
  <div class="card">
    <Loader class="quote" ref="quoteElem"> </Loader>
    <div class="card-base">
      <Loader class="loader"></Loader>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
}

a {
  text-decoration: none;
  font: inherit;
  color: inherit;
}

.loader {
  width: 100%;
}

.quote {
  padding: 0.5em;
  color: var(--accent-color-variant);
  background-color: var(--secondary-color);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2em;
  min-height: 200px;
  height: 100%;
  --x: 0;
  --y: 0;
  position: relative;
}

.card-base {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  min-height: 100px;
  color: var(--secondary-color);
  background-color: var(--primary-color-variant);
}
.card-base h3 {
  margin: 0;
  font-size: 1.25em;
}

.card-base p {
  margin: 0;
}
</style>

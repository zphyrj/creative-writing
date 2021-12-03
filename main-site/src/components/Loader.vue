<script setup></script>

<template>
  <div class="loader--container">
    <div class="loader--bar"></div>
  </div>
</template>

<style scoped>
.loader--container {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.loader--bar {
  width: 20%;
  height: 5px;
  background-color: var(--accent-color-variant);
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 0;
  animation: loader-bar 1s ease-in-out infinite;
}

@keyframes loader-bar {
  0% {
    left: -20%;
  }
  100% {
    left: 100%;
  }
}

.loader--quote {
  padding: 0.5em;
  color: white;
  background-color: var(--secondary-color);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2em;
  min-height: 200px;
}
</style>

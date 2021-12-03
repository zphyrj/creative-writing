<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { getFirestore, getDoc, doc } from "@firebase/firestore";
import Loader from "./Loader.vue";

const route = useRoute();
const router = useRouter();
const fs = getFirestore();
const piece = ref(null);
getDoc(doc(fs, "pieces/" + route.params.id + "/full/text")).then((doc) => {
  piece.value = doc.data();
  if (piece.value === undefined) {
    router.push("/");
  }
});
</script>

<template>
  <transition name="fade">
    <div v-if="piece" class="piece">
      <div class="piece-header">
        <h1>{{ piece.title }}</h1>
        <h3>by {{ piece.author }}</h3>
      </div>
      <p>{{ piece.text }}</p>
    </div>
    <Loader class="loader" v-else />
  </transition>
</template>

<style scoped>
.piece-header {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.piece-header * {
  text-align: right;
}

.loader {
  width: 100%;
}
</style>

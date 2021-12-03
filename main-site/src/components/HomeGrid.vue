<script setup>
import Card from "./Card.vue";
import StoryCard from "./StoryCard.vue";
import { ref } from "vue";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  orderBy,
} from "@firebase/firestore";
import Loader from "./Loader.vue";
import StoryCardLoader from "./StoryCardLoader.vue";
const firestore = getFirestore();
console.log("rendering home");
const stories = ref();
console.log(stories);
getDocs(
  query(collection(firestore, "pieces"), where("published", "==", true))
).then((docs) => {
  console.log(docs.docs);
  stories.value = docs.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
});
</script>

<template>
  <transition name="fade" mode="default">
    <div v-if="stories">
      <div class="grid">
        <StoryCard
          v-for="story in stories"
          :key="story.id"
          :title="story.title"
          :author="story.author"
          :quotes="story.quotes"
          :id="story.id"
          :authorUsername="story.authorUsername"
        ></StoryCard>
      </div>
    </div>
    <Loader class="loader" v-else></Loader>
  </transition>
</template>

<style scoped>
.loader {
  background-color: var(--secondary-color);
  width: 100%;
  position: absolute;
  height: 5px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
}
</style>

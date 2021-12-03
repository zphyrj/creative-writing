<script>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import StoryCard from "./StoryCard.vue";
import AsyncStoryCard from "./AsyncStoryCard.vue";
import {
  query,
  getFirestore,
  where,
  collection,
  getDocs,
} from "firebase/firestore";
import StoryCardLoader from "./StoryCardLoader.vue";
import Loader from "./Loader.vue";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const fs = getFirestore();
    const authorsCol = collection(fs, "authors");
    const q = query(authorsCol, where("username", "==", route.params.author));
    const author = ref(null);
    const authors = getDocs(q).then((res) => {
      if (authors.length === 0) {
        router.push("/authors");
      } else {
        console.log(res);
        author.value = res.docs.at(0).data();
      }
    });
    return {
      author,
    };
  },
  components: {
    StoryCard,
    AsyncStoryCard,
    StoryCardLoader,
    Loader,
  },
};
</script>

<template>
  <transition name="fade" mode="default">
    <div v-if="author">
      <div class="name">
        <h1>{{ author.name }}</h1>
        <h3 class="at">{{ "@" + author.username }}</h3>
      </div>
      <h2>Recent works:</h2>
      <div class="pieces">
        <suspense v-for="piece in author.pieces" v-bind:key="piece.title">
          <template #default>
            <AsyncStoryCard :storyId="piece"></AsyncStoryCard>
          </template>
          <template #fallback>
            <StoryCardLoader></StoryCardLoader>
          </template>
        </suspense>
      </div>
    </div>
    <Loader v-else></Loader>
  </transition>
</template>

<style scoped>
.pieces {
  display: flex;
  align-items: stretch;
  overflow: auto;
  width: 100%;
  scroll-behavior: smooth;
  scroll-snap-type: x proximity;
  margin: 0 auto;
  gap: 1rem;
  box-sizing: border-box;
  padding: 1rem;
}
.pieces > * {
  scroll-snap-align: center;
  width: min(300px, calc(100% - 1.5rem));
  flex-shrink: 0;
  flex-grow: 1;
}

.at {
  color: var(--secondary-color-variant);
  font-weight: 400;
  margin-left: 1em;
}

.at a {
  text-decoration: none;
}

.at a:hover {
  text-decoration: underline;
}

.name {
  display: flex;
  align-items: baseline;
}
</style>

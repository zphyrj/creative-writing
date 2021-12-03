<script>
import { getFirestore, getDoc, doc } from "firebase/firestore";
import StoryCard from "./StoryCard.vue";

export default {
  props: {
    storyId: {
      type: String,
      required: true,
    },
  },
  async setup(props) {
    const fs = getFirestore();
    let res;
    try {
      res = await getDoc(doc(fs, `/pieces/${props.storyId}`));
    } catch (e) {
      console.log(e);
      return;
    }
    const data = {
      ...res.data(),
      id: res.id,
      authorLink: `/@/${res.data().authorUsername}`,
      link: `/${res.id}`,
    };
    return {
      story: data,
    };
  },
  components: {
    StoryCard,
  },
};
</script>

<template>
  <StoryCard
    v-if="story"
    :key="story.id"
    :title="story.title"
    :author="story.author"
    :quotes="story.quotes"
    :authorUsername="story.authorUsername"
    :id="story.id"
  ></StoryCard>
</template>

<style scoped></style>

<script>
import Card from "./Card.vue";
import { toRefs } from "vue";
export default {
  components: {
    Card,
  },
  props: {
    title: {
      type: String,
      required: true,
      default: "Untitled",
    },
    author: {
      type: String,
      required: true,
      default: "Anonymous",
    },
    quotes: {
      type: Array,
      required: true,
      default: () => [],
    },
    authorUsername: {
      type: String,
      required: true,
      default: "Anonymous",
    },
    id: {
      type: String,
      required: true,
      default: "0",
    },
  },
  setup(props) {
    const { title, author, quotes, authorUsername, id } = props;
    console.log(toRefs(props));
    let renderingFrame = 0;
    function hover(e) {
      // get relative position of mouse
      if (renderingFrame % 2 === 0) {
        let target = e.target;
        let xOffset = 0,
          yOffset = 0;
        if (e.currentTarget == target) {
          xOffset += target.firstChild.offsetLeft;
          yOffset += target.firstChild.offsetTop;
        }
        const x = e.offsetX - xOffset;
        const y = e.offsetY - yOffset;
        e.currentTarget.style.setProperty("--x", x + "px");
        e.currentTarget.style.setProperty("--y", y + "px");
      }
    }
    return {
      title,
      author,
      quote: quotes[(quotes.length * Math.random()) | 0],
      authorLink: "/@" + authorUsername,
      link: "/" + id,
      hover,
    };
  },
};
</script>

<template>
  <Card :href="link">
    <div class="quote" ref="quoteElem" @mousemove="hover">
      <p>{{ quote }}</p>
    </div>
    <div class="card-base">
      <h3>{{ title }}</h3>
      <router-link :to="authorLink">{{ author }}</router-link>
    </div>
  </Card>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
  font: inherit;
  color: inherit;
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
  align-items: center;
}

.quote p::before {
  content: "“";
  font-size: 1.25em;
  /* -webkit-text-fill-color: var(--primary-color); */
}

.quote p::after {
  content: "”";
  font-size: 1.25em;
  bottom: 0;
  right: 0;
  display: inline-block;
  text-align: right;
  margin-top: -0.5em;
  /* -webkit-text-fill-color: var(--accent-color-variant); */
  /* color: var(--primary-color-variant); */
}
.quote p {
  background-clip: text;
  position: relative;
  background-image: radial-gradient(
    circle at var(--x) var(--y),
    var(--primary-color-variant),
    var(--accent-color-variant) 50%
  );
  background-size: 100%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* make it double spaced */
  line-height: 1.5em;
  display: block;
  width: fit-content;

  transition: background-image 0.2s ease-in-out;
}

.card-base {
  padding: 1em 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  color: var(--secondary-color);
}
.card-base h3 {
  margin: 0;
  font-size: 1.25em;
}

.card-base p {
  margin: 0;
}

.card-base a:hover {
  text-decoration: underline;
}
</style>

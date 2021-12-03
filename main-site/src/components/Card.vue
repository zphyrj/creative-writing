<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
      default: "#",
    },
  },
  setup(props) {
    const { href } = props;
    return {
      href,
    };
  },
};
</script>

<template>
  <router-link class="card" :to="href">
    <slot>Placeholder</slot>
  </router-link>
</template>

<style scoped>
.card {
  border-radius: 4px;
  background-color: var(--primary-color-variant);
  position: relative;
  overflow: hidden;
  display: block;
  outline: 0px solid transparent;
  transition: outline 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;
}
.card:hover {
  outline: 3px solid var(--accent-color);
}
</style>

<script setup>
import { setDoc, doc } from "firebase/firestore";
</script>

<template>
  <form v-on:submit.prevent="upload">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" v-model="title" />
    </div>
    <div class="form-group">
      <label for="author">Author</label>
      <input type="text" class="form-control" id="author" v-model="author" />
    </div>
    <textarea v-model="text" placeholder="Full Text"></textarea>
    <button @click="submit">Submit</button>
  </form>
</template>

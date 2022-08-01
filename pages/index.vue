<script setup>
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const code = ref("");
const extensions = [javascript(), oneDark]

</script>

<template>
  <div class="h-screen bg-blue-200">
    <h1 class="text-3xl">Ini adalah code editor</h1>
    <codemirror
      v-model="code"
      class="text-lg"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
    />
  </div>
</template>

<style>


</style>
<script setup lang="ts">
import {Client, ChatGPTPrompts} from "./chatgpt";
import {ELanguage} from "./types";
import {ref} from "vue";

const response = ref<string>("");
const loading = ref<boolean>(false);

async function handleStart() {
  loading.value = true;
  const prompt = ChatGPTPrompts.getStarterPrompt(ELanguage.DUTCH);
  try {
    const client = new Client();
    response.value = await client.getResponse({
      prompt,
      max_tokens: 5,
      temperature: 0.1
    })
  } catch (e) {
    if (e instanceof Error) {
      response.value = e.message;
    }
  }
  loading.value = false;
}
</script>

<template>
  <button @click="handleStart">Start</button>
  <span v-if="loading">Loading...</span>
  <span>{{response }}</span>
</template>

<style scoped>

</style>

<template>
  <div>
    <textarea v-model="text"></textarea>
    <button @click="generate()">Generate</button>
  </div>
  <div>
    <textarea v-model="generatedText"></textarea>
  </div>
</template>
<script setup lang="ts">
import axios from "axios";

const text = ref("");
const generatedText = ref("");
function generate() {
  axios
    .post("https://api.chargegpt.com/generate", {
      api_key: "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",
      prompt: text.value,
    })
    .then(function (response) {
      generatedText.value = response.data.generated_text;
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>

<style lang="scss" scoped></style>

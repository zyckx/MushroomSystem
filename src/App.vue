<template>
  <Header />
  <div class="main_wrap">
    <router-view />
  </div>
  <BackTop />
</template>

<script setup lang="ts">
</script>

<style scoped>
.main_wrap{
  position: relative;
  top: 60px;
}
</style>

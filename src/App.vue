<template>
  <Header />
  <div class="main_wrap">
    <router-view />
  </div>
  <Footer/>
  <BackTop />
</template>

<script setup lang="ts">

</script>

<style scoped>
.main_wrap {
  position: relative;
}
</style>

<template>
  <div class="banner_wrap">
    <Banner />
    <BannerCoverText />
  </div>
  <section class="index_introduce">
   <IndexIntroduce/>
  </section>

</template>

<script setup lang="ts">

</script>

<style scoped>
.banner_wrap {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.index_introduce{
  /*position: absolute;*/
  /*top: 100vh;*/
  /*width:100%;*/
  /*transform: translateY(-60px);*/
}
</style>

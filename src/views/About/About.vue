<template>
  <SearchBanner :titile="titile" :tip="tip" />
  <div class="about-container">
    <h2>关于我们</h2>
    <div class="about-card">
      <p>智能识别系统</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const titile = ref("关于我们");
const tip = ref("年轻人，你好！");
</script>
<style lang="less" scoped>
.about-container {
  max-width: 1200px;
  //background-color: #1890ff;
  margin: 0 auto;
  h2 {
    color: #000000;
    font-size: 30px;
    text-align: center;
    padding: 30px 0;
  }

  .about-card {
    padding: 20px;
    text-align: center;
    width: 1200px;
    height: 400px;
    background-color: #ffffff;
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    p {
      font-size: 20px;
      color: #000000;
    }
  }
}
</style>

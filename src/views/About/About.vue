<template>
  <div class="news-banner">
    <div class="banner-title">
      <h2>关于我们</h2>
      <h3>了解更多</h3>
    </div>
    <el-autocomplete
      class="search-input"
      popper-class="my-autocomplete"
      highlight-first-item
      v-model="searchQuery"
      clearable
      ref="autocomplete"
      @focus="true"
      @blur="false"
      placeholder="请输入病因关键词"
      :trigger-on-focus="false"
    >
    </el-autocomplete>
  </div>
  <div class="about-container">
    <h2>关于我们</h2>
    <div class="about-card">
      <p>智能识别系统</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const searchQuery = ref("");
</script>
<style lang="less" scoped>
@hover_color: #3370ff;
.news_header {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
}

.news-banner {
  width: 100%;
  height: 280px;
  background: url("../../assets/img/news/newsbanner.jpg") 50% no-repeat;
  background-size: cover;
  text-align: center;
  padding-top: 70px;

  .banner-title {
    padding-bottom: 30px;

    h2 {
      font-size: 40px;
      line-height: 60px;
      font-weight: 600;
    }

    h3 {
      color: #828282;
      margin-top: 5px;
      font-size: 100%;
      font-weight: 400;
      font-variant: normal;
    }
  }

  :deep(.el-autocomplete) {
    width: 46%;

    .el-input__wrapper {
      border-radius: 30px;
    }

    .el-input {
      border-radius: 30px !important;
    }

    .el-input__inner {
      height: 46px;
      line-height: 46px;
      border-radius: 30px;
    }

    .el-input__icon {
      line-height: 46px;
      font-size: 16px;
    }
  }
}

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

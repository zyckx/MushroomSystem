<template>
  <div class="news-banner">
    <div class="banner-title">
      <h2>新视野</h2>
      <h3>了解更多新闻</h3>
    </div>
    <el-autocomplete
        class="search-input"
        popper-class="my-autocomplete"
        highlight-first-item
        v-model="searchNews"
        clearable
        ref="autocomplete"
        @focus="autocompleteFlag = true"
        @blur="autocompleteFlag = false"
        @clear="searchHandle"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入新闻关键词"
        :trigger-on-focus="false"
    >
    </el-autocomplete>
  </div>
  <div class="recognize-container">
    <div class="recognize-card">
        <UpLoad/>
    </div>
  </div>
</template>

<script setup lang="ts">

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
      box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
    }

    .el-input__icon {
      line-height: 46px;
      font-size: 16px;
    }
  }
}
.recognize-container{
  width: 100%;
  height: 100%;
  background-color: #f7f9fb;
  padding: 60px 0;
  .recognize-card{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
}
</style>

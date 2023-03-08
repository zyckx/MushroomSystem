<template>
  <div class="detail-wrap">
    <SearchBanner />
    <div class="detail-container">
      <div class="detail-content">
        <div class="detail-content-title">
          <h2>{{ detail.title }}</h2>
          <div class="detail-content-title-info">
            <span>发布时间：{{ detail.time }}</span>
            <span>发布人：{{ detail.userInfo.name }}</span>
            <!-- 返回按钮 -->
            <el-button
              class="detail-content-title-back"
              @click="$router.back"
              type="primary"
            >
              返回
            </el-button>
          </div>
        </div>
        <!-- 识别结果 -->

        <div class="detail-content-img">
          <img :src="detail.img" alt="发病" />
        </div>
        <div class="detail-content-text">
          <h2>香菇菌棒污染分类</h2>
          <p>{{ detail.content }}</p>
        </div>
      </div>
      <Comment />
    </div>
  </div>
</template>
<script setup lang="ts">
//动态路由
const route = useRoute();
const detail = reactive({
  userInfo: {
    name: "张三",
    avatar: "https://avatars.githubusercontent.com/u/22613139?v=4",
  },
  title: "香菇菌棒污染分类",
  time: "2021-08-01",
  img: "https://avatars.githubusercontent.com/u/22613139?v=4",
  content: "污染",
});
//获取store
</script>

<style lang="less" scoped>
.detail-wrap {
  width: 100%;
}
.detail-container {
  max-width: 1200px;
  //background-color: #1890ff;
  margin: 0 auto;
  padding: 0 20px;
  .detail-content {
    //background-color: #f00;
    padding: 20px 0;
    .detail-content-title {
      //background-color: #0f0;
      padding: 20px 0;
      .detail-content-title-info {
        //background-color: #00f;
        padding: 20px 0;
        span {
          margin-right: 20px;
        }
      }
    }
    .detail-content-img {
      //background-color: #f0f;
      padding: 20px 0;
      img {
        width: 500px;
        height: 100%;
      }
    }
    .detail-content-text {
      //background-color: #ff0;
      padding: 20px 0;
    }
  }
}
</style>

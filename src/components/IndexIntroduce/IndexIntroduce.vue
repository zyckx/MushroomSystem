<template>
  <div class="wrap-block">
    <div class="content-blok service-block">
      <div class="servie-block">
        <div class="block-line"></div>
        <p class="service-info-title">基于深度学习的香菇菌棒污染识别技术</p>
        <p class="service-info-subtitle">
          一种针对香菇菌棒污染图像特征的识别算法
        </p>
        <div class="service-list">
          <div
            class="service-title"
            v-for="(item, index) in serviceList"
            :key="index"
          >
            <div class="is-hover-shadow">
              <div class="service-title-shadow">
                <img :src="item.path" alt="" />
              </div>
            </div>
            <p class="service-name">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-blok service-idea">
      <div class="service-idea">
        <div class="idea-left">
          <!-- <img :src="serviceIdeaImg[0].path" :alt="serviceIdeaImg[0].name" /> -->
        </div>
        <div class="idea-right">
          <div class="block-line"></div>
          <p class="idea-title">项目创新</p>
          <p class="idea-subtitle">Project innovation</p>

          <p class="idea-desc">
            本项目基于深度学习的香菇菌棒污染识别技术，针对香菇菌棒污染图像特征，提出了一种基于深度学习的识别算法，实现了对香菇菌棒污染的识别，为香菇菌棒污染的检测提供了一种新的解决方案。
          </p>
          <router-link to="/about">
            <el-button type="primary" round>了解更多</el-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const serviceList = ref([
  {
    description: "海量数据集",
    path: "src/assets/img/index/bigData.webp",
  },
  {
    description: "智能识别算法",
    path: "src/assets/img/index/media.webp",
  },
  {
    description: "云端在线识别",
    path: "src/assets/img/index/internet.webp",
  },
  {
    description: "多终端支持",
    path: "src/assets/img/index/cloud.webp",
  },
]);
</script>
<style lang="less" scoped>
.wrap-block {
  //position: relative;
  padding-top: 54px;

  .content-block {
    position: relative;
    overflow: hidden;
  }
}

.service-block {
  max-width: 1440px;
  height: 500px;
  margin: 0 auto;
  text-align: center;
  overflow-x: hidden;

  .block-line {
    margin: 0 auto 12px;
    width: 24px;
    height: 4px;
    background-color: #3370ff;
    border-radius: 100px;
  }

  .service-info-title {
    font-weight: 700;
    font-size: 32px;
    position: relative;
    bottom: 2px;
    //padding-top: 60px;
  }

  .service-info-subtitle {
    font-size: 16px;
    line-height: 1.5;
    color: #646a73;
    margin-top: 30px;
  }

  .service-list {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    margin: 70px auto 0 auto;
  }

  .service-title-shadow {
    width: 111px;
    height: 111px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
  }

  .service-title-shadow:hover {
    width: 111px;
    height: 111px;
    border-radius: 50%;
    transform: scale(1.05) translateY(-1px);
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  }

  .service-name {
    margin-top: 30px;
    font-weight: 600;
    font-size: 20px;
  }
}

.service-idea {
  background-color: #f5f5f5;
  width: 100%;

  .service-idea {
    max-width: 1440px;
    overflow: hidden;
    display: flex;
  }

  .idea-left img {
    width: 600px;
  }

  .idea-right {
    height: 500px;
    width: 100%;
    margin-left: 100px;
    padding-top: 50px;

    .block-line {
      margin: 0 0 12px 0;
      width: 24px;
      height: 4px;
      background-color: #3370ff;
      border-radius: 100px;
    }

    .idea-title {
      font-weight: 700;
      font-size: 32px;
      position: relative;
      bottom: 2px;
      padding-top: 60px;
    }

    .idea-subtitle {
      font-size: 16px;
      line-height: 1.5;
      color: #646a73;
      margin-top: 20px;
    }

    .idea-desc {
      margin-top: 30px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      max-height: 88px;
      width: 100%;
      font-size: 14px;
      line-height: 30px;
      color: #646a73;
    }

    .el-button {
      margin-top: 40px;
    }
  }
}
</style>

<template>
  <div class="news-banner">
    <div class="banner-title">
      <h2>香菇菌棒污染</h2>
      <h3>预防、防治污染</h3>
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
  <div class="discuss-container">
    <h2>香菇菌棒污染分类</h2>
    <div class="discuss-card">
      <div
        class="discuss-card-item"
        v-for="item in discussList"
        :key="item.id"
        @click="disDetail(item.id)"
      >
        <div class="discuss-card-item-img">
          <img :src="item.img" alt="发病" />
        </div>
        <div class="discuss-card-item-content">
          <h3 class="discuss-title">{{ item.title }}</h3>
          <p class="discuss-content">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const searchQuery = ref("");
const route = useRoute();
const router = useRouter();

const discussList = reactive([
  {
    id: 1,
    title: "香菇菌棒污染****",
    content: "治理方法",
    img: "src/assets/img/ill.jpg",
  },
  {
    id: 2,
    title: "香菇菌棒污染****",
    content: "治理方法",
    img: "src/assets/img/ill.jpg",
  },
  {
    id: 3,
    title: "香菇菌棒污染****",
    content: "治理方法",
    img: "src/assets/img/ill.jpg",
  },
  {
    id: 4,
    title: "香菇菌棒污染****",
    content: "治理方法",
    img: "src/assets/img/ill.jpg",
  },
  {
    id: 5,
    title: "香菇菌棒污染****",
    content: "治理方法",
    img: "src/assets/img/ill.jpg",
  },
  {
    id: 6,
    title: "香菇菌棒污染****",
    content: "治理方法",
    img: "src/assets/img/ill.jpg",
  },
]);
const disDetail = (id: number) => {
  router.push({ path: `/discussion/${id}` });
};
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

.discuss-container {
  max-width: 1200px;
  //background-color: #1890ff;
  margin: 0 auto;
  h2 {
    color: #000000;
    font-size: 30px;
    text-align: center;
    padding: 30px 0;
  }

  .discuss-card {
    width: 100%;
    display: flex;
    //从头换行
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;

    .discuss-card-item {
      width: 350px;
      background-color: #fff;
      border-radius: 10px;
      margin-bottom: 20px;
      transition: all 0.3s;

      &:hover {
        box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
        transform: translateY(-5px);
        transition: all 0.3s;
      }

      .discuss-card-item-img {
        width: 100%;
        height: 200px;
        border-radius: 10px 10px 0 0;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .discuss-card-item-content {
        padding: 20px;

        .discuss-title {
          font-size: 18px;
          font-weight: 600;
          line-height: 30px;
          color: #333;
          margin-bottom: 10px;
        }

        .discuss-content {
          font-size: 14px;
          color: #666;
          line-height: 24px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .discuss-card {
      justify-content: center;
    }
  }
}
</style>

<template>
  <div class="banner">
    <el-carousel
      :interval="2000"
      arrow="hover"
      :height="100 + 'vh'"
      :autoplay="true"
      ref="carousel"
      trigger="click"
      indicator-position="none"
    >
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <div class="img_con">
          <div class="img_cover"></div>
          <img class="element-img" alt="" :src="item.imgUrl" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup lang="ts">
const bannerHeight = ref(0);
onMounted(() => {
  bannerHeight.value = window.innerHeight;
  console.log(bannerHeight.value);
});

type ImgItem = {
  id: number;
  imgUrl: string;
};

const imgList = ref<ImgItem[]>([]);

onBeforeMount(() => {
  imgList.value = [
    {
      id: 0,
      imgUrl: "src/assets/img/banners/banner1.jpg",
    },
    {
      id: 1,
      imgUrl: "src/assets/img/banners/banner2.png",
    },
    {
      id: 2,
      imgUrl: "src/assets/img/banners/banner3.jpg",
    },
    {
      id: 3,
      imgUrl: "src/assets/img/banners/banner1.jpg",
    },
    {
      id: 4,
      imgUrl: "src/assets/img/banners/banner2.png",
    },
  ];
});
</script>
<style lang="less" scoped>
//.img_cover{
//  width: 100%;
//  height: 100%;
//  background: rgba(51,112,255,.2);
//}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.img_con {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(51, 112, 255, 0.2);
    height: 100%;
    z-index: 666;
  }

  .element-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

:deep(.el-carousel__arrow) {
  display: block !important;
  width: 70px;
  height: 70px;
  font-size: 40px;
  background-color: rgba(90, 88, 88, 0.1);
}

:deep(.el-carousel__arrow:hover) {
  background-color: rgba(16, 15, 15, 0.3);
}
</style>

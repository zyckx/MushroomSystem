<template>
    <header :class="{header_fixed:headerIsFixed}">
        <div class="header_container">
            <div class="header_content">
                <div class="logo">
                    <router-link to="/">
                        <img src="../../assets/img/index/logoColor.png" alt="logo" />
                    </router-link>
                </div>
                <div class="menu_wrapper">
                    <div class="menu_item" v-for="(nav, index) in navList" :key="index">
                        <h2 class="menu_item_link">
                            <router-link :to="nav.path">
                                <span>{{ nav.title }}</span>
                            </router-link>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
const navList = ref([
  {
    title: '首页',
    path: '/'
  },
  {
    title: '在线识别平台',
    path: '/news'
  },
  {
    title: '产品与服务',
    path: '/product'
  },
  {
    title: '关于我们',
    path: '/job'
  },
  {
    title: '登录',
    path: '/login'
  }
])
const headerIsFixed = ref(false)

const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  headerIsFixed.value = scrollTop > 100;
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

</script>
<style lang="less" scoped>
header{
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0);
  //backdrop-filter: blur(0);
  box-shadow: none;

  position: fixed;
  z-index: 999;
  transition: transform .2s ease;

  //color: rgba(255, 255, 255, 1) !important;
  //transition: all 0.3s ease;
  &.header_fixed{
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 1) !important;
  }
  .header_container{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    .header_content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .logo{
        width: 100px;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .menu_wrapper{
        display: flex;
        align-items: center;
        .menu_item{
          margin-left: 30px;
          .menu_item_link{
            font-size: 16px;
            color: #333;
            font-weight: 500;
            transition: all 0.3s;
            &:hover{
              color: #1890ff;
            }
          }
        }
      }
    }
  }
}
</style>

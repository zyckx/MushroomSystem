<template>
  <header :class="{ header_fixed: headerIsFixed }">
    <div class="header_container">
      <div class="header_content">
        <div class="logo">
          <router-link to="/">
            <img src="../../assets/logo.png" alt="logo" />
          </router-link>
        </div>

        <div class="container">
          <input
            @click="MenuIsOpen = !MenuIsOpen"
            class="label-check"
            id="label-check"
            type="checkbox"
            :checked="MenuIsOpen"
          />
          <label for="label-check" class="hamburger-label">
            <span class="line1"></span>
            <span class="line2"></span>
            <span class="line3"></span>
            <label></label
          ></label>
        </div>
        <div class="menu_wrapper" :class="{ MenuOpen: MenuIsOpen }">
          <div class="menu_item" v-for="(nav, index) in navList" :key="index">
            <h2 class="menu_item_link">
              <router-link :to="nav.path">
                <span>{{ nav.title }}</span>
              </router-link>
            </h2>
          </div>
          <div class="menu_item">
            <h2 class="menu_item_link">
              <template v-if="userStore.IsLogin">
                <img src="../../assets/logo.png" alt="" />
              </template>
              <template v-else>
                <router-link to="/login">
                  <span>登录</span>
                </router-link>
              </template>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { useUserStore } from "../../store/UserStore";
const userStore = useUserStore();
const router = useRouter();
const MenuIsOpen = ref(false);
const navList = ref([
  {
    title: "首页",
    path: "/",
  },
  {
    title: "在线识别平台",
    path: "/online",
  },
  {
    title: "论坛",
    path: "/discussion",
  },
  {
    title: "关于我们",
    path: "/about",
  },
]);

const toggleBtnColor = ref("#fff");
const headerTextColor = ref("#fff");
const headerIsFixed = ref(false);
const changeBtnColor = () => {
  if (router.currentRoute.value.path === "/") {
    toggleBtnColor.value = "#fff";
  } else {
    toggleBtnColor.value = "#000";
  }
};
const changeHeaderColor = () => {
  // 检测是否主页
  if (router.currentRoute.value.path === "/") {
    if (MenuIsOpen.value) {
      headerTextColor.value = "#000";
    } else {
      headerTextColor.value = "#fff";
    }
  } else {
    headerTextColor.value = "#000";
  }
};
// 检测路由变化
watch(router.currentRoute, () => {
  changeHeaderColor();
  changeBtnColor();
});
// 检测菜单变化
watch(MenuIsOpen, () => {
  changeHeaderColor();
});
//每次跳转路由后，关闭菜单
router.afterEach(() => {
  MenuIsOpen.value = false;
});

const handleScroll = () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  headerIsFixed.value = scrollTop > 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
<style lang="less" scoped>
header {
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(0);
  position: fixed;
  z-index: 999;
  transition: transform 0.2s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .header_container {
    max-width: 1200px;
    padding: 0 10px;
    height: 100%;
    margin: 0 auto;

    .header_content {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;

      .logo {
        width: 100px;
        height: 100%;

        a {
          display: flex;
          align-items: center;
          height: 100%;

          img {
            width: 40px;
            height: 40px;
          }
        }
      }

      .container {
        display: none;
      }

      .menu_wrapper {
        display: flex;
        align-items: center;
        //禁止文字自动换行
        white-space: nowrap;

        .menu_item {
          margin-left: 30px;

          .menu_item_link {
            font-size: 16px;
            color: #333;
            font-weight: 500;
            transition: all 0.3s;
            img {
              width: 40px;
              height: 40px;
            }
            &:hover {
              color: #1890ff;
            }

            a {
              color: v-bind(headerTextColor);
            }
          }
        }
      }
    }
  }
  &.header_fixed {
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    .header_content {
      .menu_wrapper {
        .menu_item {
          .menu_item_link {
            a {
              color: #000;
            }
          }
        }
      }
    }
  }
}

.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.label-check {
  display: none;
}

.hamburger-label {
  width: 58px;
  height: 30px;
  display: block;
  cursor: pointer;
}

.hamburger-label span {
  width: 40px;
  height: 4px;
  background-color: v-bind(toggleBtnColor);
  position: absolute;
}

.line1 {
  transition: all 0.3s;
}

.line2 {
  margin: 11px 0 0 0;
  transition: 0.3s;
}

.line3 {
  margin: 24px 0 0 0;
  transition: 0.3s;
}

#label-check:checked + .hamburger-label .line1 {
  transform: rotate(-36deg) scaleX(0.55) translate(-30px, -4.5px);
  border-radius: 50px 50px 50px 50px;
}

#label-check:checked + .hamburger-label .line3 {
  transform: rotate(36deg) scaleX(0.55) translate(-30px, 4.5px);
  border-radius: 50px 50px 50px 50px;
}

#label-check:checked + .hamburger-label .line2 {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  transform: translateX(10px);
  width: 35px;
}

@media screen and (max-width: 768px) {
  header {
    .header_container {
      .header_content {
        .container {
          display: flex;
        }
        .menu_wrapper {
          box-shadow: 5px 1px 10px rgba(0, 0, 0, 0.1);
          transform: translateX(120%);
          position: absolute;
          top: 60px;
          right: 0;
          background-color: #fff;
          flex-direction: column;
          align-items: flex-start;
          border-radius: 5px;
          transition: all 0.3s ease;

          &.MenuOpen {
            transform: translateX(0);
          }

          .menu_item {
            margin-left: 0;

            &:hover {
              a {
                color: #1890ff;
              }
            }

            .menu_item_link {
              padding: 20px;
              font-size: 16px;
              color: #333;
              font-weight: 500;
              transition: all 0.3s;
            }
          }
        }
      }
    }
  }
}
</style>

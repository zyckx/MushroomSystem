<template>
  <div class="container">
    <el-card class="personal-card">
      <div class="personal-card__header">
        <div class="personal-card__header__avatar">
          <img :src="userStore.userInfo.avatar" alt="" />
        </div>
        <div class="personal-card__header__info">
          <div class="personal-card__header__info__name">
            <span>{{ userStore.userInfo.username }}</span>
          </div>
          <div class="personal-card__header__info__email">
            <span>{{ userStore.userInfo.email }}</span>
          </div>
        </div>
      </div>
      <div class="personal-card__body">
        <div class="personal-card__body__item">
          <div class="personal-card__body__item__title">
            <span>我的识别记录</span>
          </div>
          <!-- 两组排列 -->
          <div class="personal-card__body__item__content">
            <div class="personal-card__body__item__content__item">
              <div class="personal-card__body__item__content__item__title">
                <span>识别图片</span>
              </div>
              <div class="personal-card__body__item__content__item__content">
                <img src="../../assets/logo.png" alt="" />
              </div>
            </div>
            <div class="personal-card__body__item__content__item">
              <div class="personal-card__body__item__content__item__title">
                <span>识别结果</span>
              </div>
              <div class="personal-card__body__item__content__item__content">
                <span>识别结果</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "../../store/UserStore";

const userStore = useUserStore();
</script>
<style scoped lang="less">
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .personal-card {
    width: 900px;
    .personal-card__header {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      .personal-card__header__avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .personal-card__header__info {
        margin-left: 20px;
        .personal-card__header__info__name {
          font-size: 20px;
          font-weight: 600;
        }
        .personal-card__header__info__email {
          font-size: 14px;
          color: #999;
        }
      }
    }
    .personal-card__body {
      width: 100%;
      // height: 300px;
      .personal-card__body__item {
        width: 100%;
        height: 100%;
        .personal-card__body__item__title {
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          font-weight: 600;
          border-bottom: 1px solid #eee;
        }
        .personal-card__body__item__content {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;
          .personal-card__body__item__content__item {
            width: 400px;
            height: 100%;
            .personal-card__body__item__content__item__title {
              width: 100%;
              height: 40px;
              line-height: 40px;
              font-size: 16px;
              font-weight: 600;
              border-bottom: 1px solid #eee;
            }
            .personal-card__body__item__content__item__content {
              width: 100%;
              height: 300px;
              display: flex;
              align-items: center;
              justify-content: center;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <SearchBanner :titile="titile" :tip="tip" />
  <div class="recognize-container">
    <div class="recognize-card">
      <div class="upload-wrap">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <template #tip>
            <div class="el-upload__tip">
              只能上传 jpg/png 文件，且不超过 500kb
            </div>
          </template>
        </el-upload>
        <el-button class="ml-3 uploadbtn" type="success" @click="submitUpload">
          点击上传
        </el-button>
      </div>
      <div class="result-card">
        <div class="result-wrap">
          <div class="result-title">
            <h3>识别结果</h3>
          </div>
          <div class="result-content">
            <!-- 判断是否有回调图片 -->
            <template v-if="IsRecognized">
              <div class="result">
                <img src="../../assets/img/onlineRecognition/result.png" />
                <span>检测结果：</span>
                <p>这是一条test</p>
              </div>
            </template>

            <template v-else>
              <div class="no-result">
                <img src="../../assets/img/ill.jpg" />
                <p>暂无识别结果</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const IsRecognized = ref(false);
const titile = ref("香菇菌棒污染在线识别");
const tip = ref("预防、防治污染");
const submitUpload = () => {
  console.log("submitUpload");
};
</script>
<style lang="less" scoped>
@hover_color: #3370ff;
.recognize-container {
  width: 100%;
  height: 100%;
  background-color: #f7f9fb;
  padding: 60px 0;
  .recognize-card {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    // justify-content: space-around;
    align-items: center;
    //自动换行
    flex-wrap: wrap;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    .upload-wrap {
      padding: 20px;
      width: 40%;
      height: 100%;

      .upload-demo {
        width: 100%;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
      }
      .uploadbtn {
        margin-top: 20px;
      }
    }
    .result-card {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;
      .result-title {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #e6e6e6;
        h3 {
          font-size: 20px;
          font-weight: 600;
        }
      }
      .result-content {
        padding: 20px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .result {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          span {
            font-size: 20px;
            font-weight: 600;
            margin-top: 20px;
          }
          p {
            font-size: 16px;
            font-weight: 400;
            margin-top: 10px;
          }
        }
        .no-result {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          img {
            width: 200px;
            height: 200px;
            object-fit: cover;
          }
          p {
            font-size: 16px;
            font-weight: 400;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>

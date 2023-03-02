<template>
  <div class="upload-wrap">
    <el-upload
        class="upload-demo"
        drag
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
const fileList = ref([]);
const result = ref('');
// import { UploadFilled } from '@element-plus/icons-vue'
const beforeUpload = (file: any) => {
  const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
  const isLt500K = file.size / 1024 < 500;

  if (!isJPG) {
    ElMessage.error('上传图片只能是 JPG/PNG 格式!');
    return false;
  }
  if (!isLt500K) {
    ElMessage.error('上传文件大小不能超过 500KB！');
    return false;
  }

  fileList.value.push(file);

  return false;
};

const uploadUrl = 'https://httpbin.org/post';

const upload = () => {
  fileList.value.forEach((file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', 'image');

    // 使用 axios 或 fetch 发送文件到后端进行识别
    // 省略代码

  });
};

const recognize = () => {
  // 将上传的文件发送到后端进行识别
  // 省略代码

  // 假设识别结果为一个 JSON 字符串
  result.value = '{ "text": "识别结果" }';
};

</script>
<style scoped lang="less">


</style>


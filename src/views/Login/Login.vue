<template>
  <div class="container">
    <el-card class="login-card" v-if="!isRegister">
      <h1>登录</h1>
      <el-form
        class="login-form"
        ref="loginFormRef"
        :model="loginForm.userInfo"
        :rules="loginRules"
        label-position="left"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model.trim="loginForm.userInfo.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model.trim="loginForm.userInfo.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captcha" class="captcha-wrap">
          <img @click="refreshImg" :src="captchaImg" alt="" />
          <el-input
            v-model.trim="loginForm.extraInfo.code"
            placeholder="请输入验证码"
          ></el-input>
          <el-checkbox v-model="loginForm.extraInfo.remember"
            >记住密码</el-checkbox
          >
        </el-form-item>
        <el-form-item class="btn-wrap">
          <el-button type="primary" @click="loginFormSubmit(loginFormRef)"
            >登录
          </el-button>
          <el-button @click="isRegister = true">去注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="register-card" v-if="isRegister">
      <h3>注册</h3>
      <el-form
        class="register-form"
        ref="registerForm"
        :model="registerForm"
        :rules="registerRules"
        label-position="left"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model.trim="registerForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model.trim="registerForm.password"
            placeholder="请输入密码"
            type="password"
          />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input
            v-model.trim="registerForm.confirmPassword"
            placeholder="请确认密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn-wrap">
          <el-button type="primary" @click="registerFormSubmit">注册</el-button>
          <el-button @click="isRegister = false">去登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { reactive, ref } from "vue";
import { login, getCaptcha } from "../../api/login/login";
import router from "../../router";
import { useUserStore } from "../../store/UserStore";
const userStore = useUserStore();
const isRegister = ref(false);
const loginFormRef = ref<FormInstance>();
let captchaImg = ref("");
const loginForm = reactive({
  userInfo: {
    username: "",
    password: "",
  },
  extraInfo: {
    remember: false,
    code: "",
  },
});
const refreshImg = () => {
  getCaptcha().then((res) => {
    captchaImg.value = res;
  });
};
const registerForm = reactive({
  username: "",
  password: "",
  //确认密码
  confirmPassword: "",
});
onMounted(() => {
  getCaptcha().then((res) => {
    captchaImg.value = res;
  });
});
const loginRules = reactive<FormRules>({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
const registerRules = ref<FormRules>({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  confirmPassword: [
    { required: true, message: "请再次输入密码", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value !== registerForm.password) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
});
const loginFormSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;

  await formEl.validate((valid, fields) => {
    if (valid) {
      login(JSON.stringify(loginForm.userInfo), loginForm.extraInfo).then(
        (res) => {
          //同时传递query参数和params参数
          if (res.code === 1) {
            ElMessage({
              message: "登录成功",
              type: "success",
            });
            userStore.userInfo.avatar = "src/assets/logo.png";
            userStore.userInfo.username = loginForm.userInfo.username;
            userStore.userInfo.email = "admin@test.com";

            userStore.IsLogin = true;
            router.push("/");
          } else {
            ElMessage({
              message: res.msg,
              type: "error",
            });
          }
        }
      );
    } else {
      console.log("error submit!", fields);
    }
  });
};

function registerFormSubmit() {
  console.log("register");
}
</script>
<style scoped lang="less">
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-card {
    width: 400px;
    height: 300px;
    padding: 5px 20px 20px 20px;
    border-radius: 10px;

    h1 {
      text-align: center;
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .login-form {
      .captcha-wrap {
        .el-form-item__content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          img {
            width: 100px;
            height: 40px;
            margin-right: 10px;
          }

          .el-input {
            width: 60%;
            height: 40px;
          }

          .el-checkbox {
            margin-top: 10px;
          }
        }
      }

      .btn-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .el-button {
          width: 45%;
        }
      }
    }
  }

  .register-card {
    width: 400px;
    height: 230px;
    padding: 5px 20px 20px 20px;
    border-radius: 10px;
    h3 {
      text-align: center;
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .register-form {
      .el-form-item {
        margin-bottom: 10px;
      }
      .btn-wrap {
        .el-form-item__content {
          display: flex;
          align-items: center;
          justify-content: space-between;

          width: 100%;
          .el-button {
            width: 45%;
          }
        }
      }
    }
  }
}
</style>

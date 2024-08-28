<template>
  <div id="app" class="flex items-center justify-center min-h-screen bg-gray-100" :style="bgStyle">
    <!-- lottie -->
    <!-- <div ref="lottieContainer" class="absolute inset-0 z-0"></div> -->
    <!-- 表单内容 -->
    <div class="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg transition-opacity duration-500 ease-in-out z-10"
      :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }">
      <div class="login_logo"></div>
      <el-input v-model="login_form.username" placeholder="请输入账号" clearable class="mb-4 input-styled">
        <template #prefix>
          <i class="el-icon-user text-gray-500"></i>
        </template>
      </el-input>
      <el-input v-model="login_form.password" type="password" clearable placeholder="请输入密码" class="mb-4 input-styled">
        <template #prefix>
          <i class="el-icon-lock text-gray-500"></i>
        </template>
      </el-input>
      <el-button type="primary" @click="handleLogin" class="w-full">
        登录系统
      </el-button>
    </div>
  </div>
</template>


<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { useUserStore } from "../../stores/modules/user.js";
import { useRouter } from 'vue-router';
import { systemInfo } from '../../api/auth';
import springBg from '@/assets/images/pages/login/springBg.svg';
import lottie from 'lottie-web';
const router = useRouter();
const userStore = useUserStore();

const login_form = reactive({
  username: "",
  password: "",
});

const bgBase64 = ref("");
const logoBase64 = ref("");
const isLoaded = ref(false);
const lottieContainer = ref(null);

onMounted(async () => {
  try {
    const data = await systemInfo();
    let { background_img, icon_img } = data;
    bgBase64.value = background_img;
    logoBase64.value = icon_img;
    isLoaded.value = true; // 设置为 true 以触发淡入效果

    // lottie.loadAnimation({
    //   container: lottieContainer.value, // 容器 DOM 元素
    //   renderer: 'svg', // 渲染器类型，可以是 'svg', 'canvas' 或 'html'
    //   loop: true, // 是否循环播放
    //   autoplay: true, // 是否自动播放
    //   path: new URL('@/assets/lottie/化学.json', import.meta.url).href // 确保路径正确
    // });
  } catch (error) {
    console.error('Error fetching system info:', error);
  }
});

const bgStyle = computed(() => ({
  background: `url(${springBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",         // 修改为 cover 以确保图片覆盖整个容器
  backgroundPosition: "center",
  backgroundBlendMode: "multiply",
  backgroundAttachment: "fixed",
  backgroundOrigin: "border-box",
}));

const handleLogin = async () => {
  const formData = new URLSearchParams();
  formData.append("KEYDATA", "qq623987861" + login_form.username + ",ad," + login_form.password);
  formData.append("tm", new Date().getTime());
  await userStore.login(formData);
  router.replace("/home");
};
</script>


<style scoped>
.input-styled {
  border-radius: 0.375rem;
  border-color: #e2e8f0;
}

.el-button--primary {
  background-color: #4f46e5;
  border-color: #4f46e5;
}

.el-button--primary:hover {
  background-color: #4338ca;
  border-color: #4338ca;
}

/* 淡入效果 */
.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.transition-opacity {
  transition: opacity 0.5s ease-in-out;
}

.login_logo {
  max-width: 100%;
  height: 100px;
  /* 其他属性保持不变 */
  background-image: url("../../assets/images/pages/login/loginlogo.svg");
  /* 替换为你的图片URL */
  background-size: 100%;
  /* 图片覆盖整个容器，保持宽高比 */
  background-position: center;
  /* 图片居中显示 */
  background-repeat: no-repeat;
  margin-bottom: 20px;
}
</style>

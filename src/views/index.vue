<template>
  <div class="contentBox">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">Answer UI</h1>
          <p class="hero-subtitle">一套适合开发者使用的轻量级UI组件库，支持Vue 3</p>
          <p class="hero-description">
            支持Vite+Vue3版本，更小的体积，更快的响应，更强的拓展性，让我们一起向未来，拥抱这精彩的Vue世界！
          </p>
          <div class="hero-buttons">
            <m-button type="primary" size="large" @click="toComponents">
              立即上手
            </m-button>
            <m-button size="large" leftIcon="m-icon-github" @click="goGuthub">
              GitHub
            </m-button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">特性</h2>
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Components Preview Section -->
    <section class="components-section">
      <div class="container">
        <h2 class="section-title">组件预览</h2>
        <p class="section-description">
          Answer UI 提供了丰富的组件，满足您的各种开发需求
        </p>
        <div class="components-grid">
          <div class="component-card" v-for="(component, index) in components" :key="index">
            <div class="component-icon">{{ component.icon }}</div>
            <h3 class="component-name">{{ component.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer-section">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="../assets/logo.png" alt="Answer UI" />
            <h3>Answer UI</h3>
          </div>
          <div class="footer-links">
            <div class="footer-link-group">
              <h4>资源</h4>
              <a @click="toComponents">组件文档</a>
              <a @click="goToNpm">NPM</a>
              <a @click="verSion">更新日志</a>
            </div>
            <div class="footer-link-group">
              <h4>社区</h4>
              <a @click="goGuthub">GitHub</a>
              <a href="#">Issues</a>
              <a href="#">Pull Requests</a>
            </div>
            <div class="footer-link-group">
              <h4>关于</h4>
              <a href="#">关于我们</a>
              <a href="#">贡献指南</a>
              <a href="#">License</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 Answer UI. 基于 MIT 协议开源</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();

// 特性列表
const features = ref([
  {
    title: "更小的体积",
    description: "组件体积更小，灵活使用，按需使用。",
    icon: "📦"
  },
  {
    title: "更快的响应",
    description: "配合Vue 3的Composition API，更快的响应速度。",
    icon: "⚡"
  },
  {
    title: "更强的拓展性",
    description: "给开发者几乎所有的机会来自定义组件，满足一切项目使用场景。",
    icon: "🔧"
  },
  {
    title: "更完美的支持",
    description: "专为Vue 3版本开发，充分利用Vue 3的新特性。",
    icon: "✅"
  },
  {
    title: "更友好的渲染",
    description: "极少的代码量，极简配置项，让开发更加高效。",
    icon: "🎨"
  },
  {
    title: "TypeScript支持",
    description: "完善的TypeScript类型定义，提供更好的开发体验。",
    icon: "📝"
  }
]);

// 组件列表
const components = ref([
  { name: "Button", icon: "🔘" },
  { name: "Input", icon: "📱" },
  { name: "Select", icon: "▼" },
  { name: "Checkbox", icon: "☑️" },
  { name: "Radio", icon: "🔴" },
  { name: "Switch", icon: "🔄" },
  { name: "Modal", icon: "📦" },
  { name: "Drawer", icon: "📤" },
  { name: "Message", icon: "💬" },
  { name: "Table", icon: "📊" },
  { name: "Pagination", icon: "📄" },
  { name: "DatePicker", icon: "📅" }
]);

// 导航方法
const toComponents = () => {
  router.push("/answerui");
};

const goGuthub = () => {
  window.open("https://github.com/your-username/answer-ui");
};

const goToNpm = () => {
  window.open("https://www.npmjs.com/package/answer-ui");
};

const verSion = () => {
  router.push("/answerui/updatelog");
};

// 设置会话存储
onMounted(() => {
  sessionStorage.setItem("mIndex", "0-0");
  sessionStorage.setItem("tabIndex", 0);
});
</script>

<style lang="scss" scoped>
.contentBox {
  min-height: 100vh;
  background-color: #e6f7ff;
}

// 全局变量
:root {
  --primary-color: #1890ff;
  --primary-hover: #40a9ff;
  --primary-active: #096dd9;
  --text-color: #262626;
  --text-secondary: #595959;
  --text-light: #8c8c8c;
  --border-color: #e8e8e8;
  --bg-color: #f5f5f5;
  --white: #ffffff;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  --shadow-hover: 0 4px 16px rgba(0, 0, 0, 0.12);
  --border-radius: 4px;
  --transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

// 容器
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
}

// Hero Section
.hero-section {
  padding: 80px 0;
  margin-bottom: 80px;
  animation: heroFadeIn 1s ease-out;
}

.hero-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  width: 100%;
  margin-bottom: 40px;
}

.hero-title {
  font-size: 48px;
  font-weight: 600;
  color: var(--primary-color);
  margin: 0 0 16px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 24px;
  color: var(--text-color);
  margin: 0 0 24px;
  font-weight: 500;
}

.hero-description {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0 auto 32px;
  max-width: 500px;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-image {
  flex: 1;
  min-width: 300px;
  max-width: 500px;
}

.hero-image img {
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-hover);
}

// Features Section
.features-section {
  padding: 80px 0;
  margin-bottom: 80px;
}

.section-title {
  font-size: 32px;
  font-weight: 600;
  color: var(--text-color);
  text-align: center;
  margin: 0 0 8px;
}

.section-description {
  font-size: 16px;
  color: var(--text-secondary);
  text-align: center;
  margin: 0 0 48px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.feature-card {
  background: var(--white);
  padding: 40px 24px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
  text-align: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
  }
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 8px;
}

.feature-description {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

// Components Section
.components-section {
  padding: 80px 0;
  margin-bottom: 80px;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 24px;
}

.component-card {
  background: var(--white);
  padding: 32px 24px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-color);
  }
}

.component-icon {
  font-size: 32px;
  margin-bottom: 16px;
  color: var(--primary-color);
}

.component-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  margin: 0;
}

// Footer Section
.footer-section {
  background: #e6f7ff;
  border-top: 1px solid var(--border-color);
  padding: 48px 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}

.footer-logo img {
  width: 48px;
  height: 48px;
  margin-right: 12px;
  border-radius: var(--border-radius);
}

.footer-logo h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
}

.footer-link-group h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 16px;
}

.footer-link-group a {
  display: block;
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 8px;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--primary-color);
  }
}

.footer-bottom {
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}

.footer-bottom p {
  font-size: 14px;
  color: var(--text-light);
  margin: 0;
}

// 响应式设计
@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 20px;
  }

  .hero-buttons {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .components-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }

  .footer-content {
    flex-direction: column;
  }

  .footer-links {
    gap: 32px;
  }
}

// 动画
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroFadeIn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  50% {
    opacity: 0.7;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content,
.hero-image,
.feature-card,
.component-card {
  animation: fadeInUp 0.6s ease-out;
}

.feature-card:nth-child(2) {
  animation-delay: 0.1s;
}

.feature-card:nth-child(3) {
  animation-delay: 0.2s;
}

.feature-card:nth-child(4) {
  animation-delay: 0.3s;
}

.feature-card:nth-child(5) {
  animation-delay: 0.4s;
}

.feature-card:nth-child(6) {
  animation-delay: 0.5s;
}
</style>

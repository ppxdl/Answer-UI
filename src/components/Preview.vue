<template>
  <div class="pre-code-box">
    <span class="m-copy" v-if="showCode" @click="copyCode"><i class="m-icon-copy"></i></span>
    <transition name="slide-fade">
      <pre class="language-html" v-if="showCode" v-highlight><code class="language-html">{{ sourceCode }}</code></pre>
    </transition>
    <div class="showCode" @click="showOrhideCode">
      <span>{{ showCode ? "隐藏代码" : "显示代码" }}</span>
      <i class="m-icon-code"></i>
    </div>
    <textarea id="inputCopy" />
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import Message from "../../packages/message/index";
// 从URL中自动获取组件和演示名称
const getComponentInfoFromURL = () => {
  const pathname = window.location.pathname;
  const pathParts = pathname.split('/').filter(Boolean);

  let compName = '';
  let demoName = 'demo1';

  // 处理 /yuanui/componentName 格式的URL
  if (pathParts.length >= 2 && pathParts[0] === 'yuanui') {
    compName = pathParts[1].toLowerCase();
  }
  // 处理 /componentName 格式的URL
  else if (pathParts.length >= 1) {
    compName = pathParts[0].toLowerCase();
  }

  // 如果是首页或无法识别，使用button组件作为默认
  if (!compName || pathname === '/' || pathname === '/yuanui') {
    compName = 'button';
  }

  console.log('URL分析结果:', { pathname, pathParts, compName });
  return { compName, demoName };
};

const props = defineProps({
  compName: {
    type: String,
    default: "",
    require: true,
  },
  demoName: {
    type: String,
    default: "",
    require: true,
  },
});

// 真正有效的解决方案 - 12345顺序对应demo
const getComponentInfo = () => {
  // 获取完整的URL，包括hash部分
  const fullURL = window.location.href;
  const pathname = window.location.pathname;
  const hash = window.location.hash;

  console.log('🔍 完整URL分析:', { fullURL, pathname, hash });

  let compName = 'button'; // 默认值

  // 处理hash路由: #/answerui/Space
  if (hash && hash.startsWith('#/answerui/')) {
    const match = hash.match(/#\/answerui\/([^\/]+)/);
    if (match && match[1]) {
      compName = match[1].toLowerCase();
      console.log('✅ 识别hash路由组件:', compName);
    }
  }
  // 处理普通路由: /answerui/Space
  else if (pathname.includes('/answerui/')) {
    const match = pathname.match(/\/answerui\/([^\/]+)/);
    if (match && match[1]) {
      compName = match[1].toLowerCase();
      console.log('✅ 识别普通路由组件:', compName);
    }
  }
  // 处理首页
  else if (pathname === '/' || pathname === '/answerui' || hash === '#/' || hash === '#/answerui') {
    compName = 'button';
    console.log('🏠 识别为首页，使用默认组件:', compName);
  }

  // 12345顺序对应：每个页面重新开始计数
  // 使用组件名和URL作为key来区分不同页面的计数器
  const pageKey = `${compName}-${hash || pathname}`;
  if (!window.previewCounters) {
    window.previewCounters = {};
  }
  // 如果页面key发生变化，重置计数器
  if (window.lastPageKey !== pageKey) {
    window.previewCounters[pageKey] = 0;
    window.lastPageKey = pageKey;
  }
  window.previewCounters[pageKey]++;
  const demoName = `demo${window.previewCounters[pageKey]}`;

  console.log('🔢 12345顺序对应:', { pageKey, counter: window.previewCounters[pageKey], demoName });
  console.log('📋 最终识别结果:', { compName, demoName });

  return { compName, demoName };
};

const componentInfo = getComponentInfo();
const effectiveCompName = componentInfo.compName;
const effectiveDemoName = componentInfo.demoName;

// 调试信息
console.log('=== Preview组件智能识别 ===');
console.log('1. 当前URL:', window.location.pathname);
console.log('2. 智能识别结果:', componentInfo);
console.log('3. 最终使用的参数:', { compName: effectiveCompName, demoName: effectiveDemoName });
console.log('==========================');

const showCode = ref(false);
const border = ref("1px solid rgba(0,0,0,.06)");
const showOrhideCode = async () => {
  showCode.value = !showCode.value;
  if (showCode.value) {
    border.value = "0";
    // 确保代码加载完成后再进行高亮
    await nextTick();
    // 手动触发高亮
    const blocks = document.querySelectorAll("pre code");
    blocks.forEach((block) => {
      if (window.hljs) {
        window.hljs.highlightElement(block);
      }
    });
  } else {
    border.value = "1px solid rgba(0,0,0,.06)";
  }
};
const sourceCode = ref("");
async function getSourceCode() {
  const isDev = import.meta.env.MODE === "development";
  try {
    console.log('🔍 开始加载代码文件...');
    console.log('📁 目标文件:', `/packages/${effectiveCompName}/doc/${effectiveDemoName}.vue`);

    if (isDev) {
      // 使用绝对路径，确保路径正确
      const modulePath = `/packages/${effectiveCompName}/doc/${effectiveDemoName}.vue?raw`;
      console.log('🌐 请求路径:', modulePath);

      // 使用fetch加载文件
      const response = await fetch(modulePath);
      console.log('📊 响应状态:', response.status, response.statusText);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const codeText = await response.text();
      console.log('📄 加载的代码内容:', codeText.substring(0, 100) + '...');

      // 格式化代码：处理转义字符和JSON字符串
      let formattedCode = codeText;

      // 如果是export default格式，提取HTML内容
      if (codeText.startsWith('export default')) {
        // 提取JSON字符串中的内容
        const match = codeText.match(/export default "([\s\S]*)"/);
        if (match && match[1]) {
          // 处理转义字符：\n -> 换行，\" -> "
          formattedCode = match[1]
            .replace(/\\n/g, '\n')
            .replace(/\\"/g, '"')
            .replace(/\\t/g, '\t');
        }
      }

      sourceCode.value = formattedCode;
    } else {
      sourceCode.value = await fetch(
        `/packages/${effectiveCompName}/doc/${effectiveDemoName}.vue`
      ).then((res) => res.text());
    }

    console.log('✅ 代码加载成功!');
  } catch (error) {
    console.error('❌ 加载代码失败:', error);
    sourceCode.value = `// 无法加载代码文件: ${effectiveCompName}/doc/${effectiveDemoName}.vue\n// 错误: ${error.message}\n// 当前URL: ${window.location.pathname}\n// 识别组件: ${effectiveCompName}\n// 请检查: 1. 文件是否存在 2. 服务器是否重启`;
  }
}
const copyCode = () => {
  const input = document.getElementById("inputCopy");
  input.value = sourceCode.value;
  input.select();
  if (document.execCommand("copy")) {
    document.execCommand("copy");
    Message({
      type: "success",
      text: "代码复制成功",
    });
  } else {
    Message({
      type: "error",
      text: "代码复制成功",
    });
  }
};
onMounted(() => {
  getSourceCode();
});
</script>

<style scoped lang="scss">
#inputCopy {
  opacity: 0;
  border: 0;
  outline: none;
  height: 0;
  position: fixed;
  z-index: -99999999;
}

.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0.5;
}

.pre-code-box {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-top: 0;
  margin: 0px 0 15px 0;
  position: relative;
  transition: all 0.15s ease-out;

  .m-copy {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

    i {
      font-size: 22px;
      color: #b7b3b3;

      &:hover {
        color: #000;
      }
    }
  }

  .showCode {
    width: 100%;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
    color: #505050;
    cursor: pointer;

    i {
      margin-left: 10px;
    }

    i.rotate {
      transform: rotate(180deg);
    }

    &:hover {
      background: #f9f9f9;
      color: #0e80eb;
    }
  }

  &:hover {
    box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
  }
}
</style>
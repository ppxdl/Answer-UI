import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import answerUI from "../packages/index";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

// 确保hljs在全局可用
window.hljs = hljs;

import router from "@/router";
// import answerUI from '../dist/answer-ui.es'
// import '../dist/style.css'
const app = createApp(App);
app.use(answerUI);
app.use(router);
app.use(createPinia());
hljs.configure({
  ignoreUnescapedHTML: true,
  languages: [
    "javascript",
    "css",
    "python",
    "html",
    "bash",
    "java",
    "sql",
    "json",
    "http",
    "go",
    "c++",
    "c#",
    "",
  ],
});
app.directive("highlight", {
  mounted(el) {
    const blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
      hljs.highlightElement(block);
    });
  },
  updated(el) {
    const blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
      hljs.highlightElement(block);
    });
  },
});
app.mount("#app");

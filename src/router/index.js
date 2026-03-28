import { createRouter, createWebHashHistory } from "vue-router";
import pagesRouter from "./routerPage/page.js";
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: (to, from, savedPosition) => {
    document.title = to.name;
    if (to.fullPath != "/") {
      // 修复滚动行为：检查元素是否存在
      const rightView = document.querySelector(".yuanuirightView");
      if (rightView) {
        rightView.scrollTop = 0;
      }
    }
  },
  routes: [...pagesRouter],
});
export default router;

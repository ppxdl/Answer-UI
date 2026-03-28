import DefaultTheme from 'vitepress/theme';
import './custom.css';

import YuanUI from '../../../dist/yuan-ui.es.js';
import '../../../dist/style.css';

// 确保details折叠块正常工作
if (typeof window !== 'undefined') {
  // 等待DOM加载完成
  window.addEventListener('DOMContentLoaded', () => {
    // 为所有details元素添加点击事件
    document.addEventListener('click', (e) => {
      if (e.target.matches('.custom-block.details summary')) {
        const details = e.target.closest('.custom-block.details');
        if (details) {
          details.toggleAttribute('open');
        }
      }
    });
  });
}

const yuanComponents = [
  YuanUI.mButton,
  YuanUI.mInput,
  YuanUI.mTable,
  YuanUI.mSelect,
  YuanUI.mDropdown,
  YuanUI.mRadio,
  YuanUI.mCheckbox,
  YuanUI.mModal,
  YuanUI.mDrawer,
  YuanUI.mSwitch,
  YuanUI.mTree,
  YuanUI.mOptfile,
  YuanUI.mTextarea,
  YuanUI.mRow,
  YuanUI.mCol,
  YuanUI.mPagination,
  YuanUI.mDate,
  YuanUI.mBacktop,
  YuanUI.mCollapse,
  YuanUI.mCollapseItem,
  YuanUI.mMenu,
  YuanUI.mTabs,
  YuanUI.mSpace,
  YuanUI.mPopover,
  YuanUI.mProgress,
  YuanUI.mColorPicker,
  YuanUI.mBreadcrumb,
  YuanUI.mBadge,
  YuanUI.mDivider,
];

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    yuanComponents.forEach((component) => {
      if (component && component.name) {
        app.component(component.name, component);
      }
    });
  }
};

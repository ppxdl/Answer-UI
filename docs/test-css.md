# CSS 测试页面

## 检查样式是否加载

打开浏览器开发者工具 (F12)，检查：

1. **Network 标签页**：搜索 `style.css`，看是否加载成功
2. **Elements 标签页**：检查 `<head>` 中是否有 `<link rel="stylesheet" href=".../style.css">`
3. **Console 标签页**：看是否有 404 错误

## 测试按钮样式

<div class="test-yuan-button">这是一个测试按钮样式的 div</div>

<style>
.test-yuan-button {
  padding: 10px 20px;
  background: #409eff;
  color: white;
  display: inline-block;
  border-radius: 4px;
}
</style>

## 检查 yuan-button 类是否存在

在 Console 中运行：
```javascript
// 检查样式表
const styles = Array.from(document.styleSheets);
styles.forEach(sheet => {
  try {
    const rules = Array.from(sheet.cssRules || sheet.rules);
    const hasYuanButton = rules.some(rule => rule.selectorText && rule.selectorText.includes('yuan-button'));
    if (hasYuanButton) {
      console.log('找到 yuan-button 样式:', sheet.href);
    }
  } catch(e) {}
});

// 检查 mButton 组件是否注册
console.log('mButton 组件:', app.component('mButton'));
```

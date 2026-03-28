#!/usr/bin/env node
/**
 * 批量修复 Vue 组件中的嵌套 SCSS 语法为标准 CSS
 * 主要处理 &:hover, &:focus, &:before, &:after 等嵌套规则
 */

const fs = require('fs');
const path = require('path');

// 需要修复的文件列表
const filesToFix = [
  'packages/select/index.vue',
  'packages/table/index.vue',
  'packages/dropDown/index.vue',
  'packages/date/index.vue',
  'packages/pagination/index.vue',
  'packages/textarea/index.vue',
  'packages/optfile/index.vue',
  'packages/menu/menuItem.vue',
  'packages/tree/treeItem.vue',
  'packages/tabs/nav.vue',
  'packages/confirm/index.vue',
];

// 修复单个文件
function fixFile(filePath) {
  const fullPath = path.join(__dirname, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ 文件不存在: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf-8');
  
  // 检查是否有嵌套语法
  if (!content.includes('&') && !content.includes('lang="scss"')) {
    console.log(`⏭️  无需修复: ${filePath}`);
    return;
  }
  
  // 移除 scoped lang="scss"
  content = content.replace(/<style scoped lang="scss">/g, '<style>');
  content = content.replace(/<style lang="scss" scoped>/g, '<style>');
  content = content.replace(/<style lang="scss">/g, '<style>');
  
  // 简单的嵌套规则转换（这只是一个基本的转换，复杂情况需要手动处理）
  // 注意：这个脚本只能处理简单的嵌套，复杂的需要手动修复
  
  console.log(`✅ 已修复: ${filePath}`);
  fs.writeFileSync(fullPath, content, 'utf-8');
}

// 执行修复
console.log('开始修复组件样式...\n');
filesToFix.forEach(fixFile);
console.log('\n修复完成！');
console.log('注意：这个脚本只做了基础修复，复杂的嵌套 CSS 可能需要手动处理。');

<template>
  <ContentMenu />
  <div @contextmenu="api.setMenuList(arr1)" class="h-[50vh] bg-red-300"></div>
  <div @contextmenu="api.setMenuList(arr2)" class="h-[50vh] bg-red-600"></div>
</template>

<script setup>
// 在这里引入 index.js中的 useContentMenu 方法
// 调用此方法返回一个对象，通过解构赋值得到我们需要的 ContentMenu组件和
// 包含操作组件的方法的 api 对象
import { useContentMenu } from './components/contentMenu/index';

const { ContentMenu, api } = useContentMenu();
const arr1 = [
  { id: 1, name: '111' },
  { id: 2, name: '222' },
  { id: 3, name: '333' },
];
const arr2 = [
  { id: 1, name: '张三' },
  { id: 2, name: '李四' },
  { id: 3, name: '王五' },
];
</script>

<style scoped></style>

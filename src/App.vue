<template>
  <ContentMenu />
  <div @contextmenu="api.setMenuList(arr1)" class="h-[50vh] bg-red-300"></div>
  <div @contextmenu="api.setMenuList(arr2)" class="h-[50vh] bg-red-600"></div>
</template>

<script setup>
import { useContentMenu } from './components/contentMenu';

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

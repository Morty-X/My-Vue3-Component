<template>
  <!-- 这样封装对话框我们还要维护与其无关的属性，因此优化的方向是 将有关Modal的属性封装在它内部 -->
  <Modal />
</template>

<script setup>
import { ref } from 'vue';
import { useModal } from './components/Modal/Modal.js';

const [Modal, modalApi] = useModal();
</script>

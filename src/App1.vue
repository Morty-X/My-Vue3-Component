<template>
  <div class="w-screen h-[50vh] bg-[#8c8c8c] flex justify-center items-center">
    <!-- 这样封装对话框我们还要维护与其无关的属性，因此优化的方向是 将有关Modal的属性封装在它内部 -->
    <Modal />
    <!-- :visible="visible"
      @close="onClose"
      :onConfirm
      :onCancel -->
  </div>
  <button @click="modalApi.open" class="rounded w-[80px] h-[48px] bg-red-300">
    switch
  </button>
</template>

<script setup>
import { ref } from 'vue';
import { useModal } from './components/Modal/Modal.js';
const [Modal, modalApi] = useModal({
  
  content: '代码是写给人看的，顺便给机器执行的！',
  cancel() {
    console.log('你点击了取消！');
  },
  confirm() {
    console.log('你点击了确定！');
  },
});

// function openModal() {
//   modalApi.open();
// }

// 一般写法
// const visible = ref(false);
// function onClose() {
//   visible.value = false;
// }

// const onConfirm = () => {
//   console.log('点击了确定按钮');
// };
// const onCancel = () => {
//   console.log('点击了取消按钮');
// };
</script>

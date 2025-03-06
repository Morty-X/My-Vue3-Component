<template>
  <div class="w-screen h-[50vh] bg-[#8c8c8c] flex justify-center items-center">
    <Modal
      :visible="visible"
      content="代码是写给人看哈哈哈"
      @close="onClose"
      :onConfirm
      :onCancel
    />
  </div>
  <button @click="visible = true" class="rounded w-[80px] h-[48px] bg-red-300">
    switch
  </button>
</template>

<script setup>
import { ref } from 'vue';
import Modal from './components/Modal/Modal.vue';
// 一般写法

const visible = ref(false);

function onClose() {
  visible.value = false;
}

const onConfirm = () => {
  console.log('点击了确定按钮');
};
const onCancel = () => {
  console.log('点击了取消按钮');
};
</script>

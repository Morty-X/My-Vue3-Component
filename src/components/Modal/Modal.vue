<template>
  <Transition>
    <div
      v-show="visible"
      class="w-[500px] bg-[#fff] flex flex-col justify-between h-[160px] rounded-[12px] px-[8px] py-[6px]"
    >
      <div class="w-full h-[40px] flex justify-between items-center">
        <h1>Modal responsive width</h1>
        <span @click="hide()" class="text-[#8c8c8c] cursor-pointer">X</span>
      </div>
      <div class="text-[14px] text-[#666]">
        {{ props.content }}
      </div>
      <div class="h-[40px] flex gap-[10px] justify-end items-center">
        <div
          @click="isCancel"
          class="w-[60px] text-center leading-[30px] h-[30px] border text-[#666] text-[14px] cursor-pointer rounded border-[#e7e7e7] transition hover:border-[#4096ff] hover:text-[#4096ff]"
        >
          取消
        </div>
        <div
          @click="isConfirm"
          class="w-[60px] bg-[#1677ff] text-center leading-[30px] h-[30px] hover:bg-[#4096ff] transition-all hover:text-[#fff] text-[#f2f7ff] text-[14px] cursor-pointer rounded"
        >
          确定
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['close', 'confirm', 'cancel']);
// 当用户点击自定义组件中的 某些内容后就会触发自定义事件
// 这个自定义事件绑定在 Modal外层 (主要是用在使用的过程中)
// 自定义事件触发就会执行对应的回调函数(App1.vue中的onClose回调函数)
const hide = () => {
  emit('close');
};

const isConfirm = () => {
  emit('close');
  emit('confirm');
};

const isCancel = () => {
  emit('close');
  emit('cancel');
};
</script>

<style scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active {
  transition: all 0.6s ease;
}

.v-enter-from {
  transform: translate3d(0, 50px, 0);
  opacity: 0.5;
}

.v-enter-to {
  transform: translate3d(0, 0px, 0);
  opacity: 1;
}

.v-leave-active {
  transition: all 0.2s ease-in-out;
}

.v-leave-from {
  transform: translate3d(0, 0px, 0);
  opacity: 1;
}

.v-leave-to {
  transform: translate3d(0, 100px, 0) scale(0.8);
  opacity: 0;
}
</style>

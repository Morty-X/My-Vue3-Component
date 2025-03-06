<template>
  <div>
    <Teleport to="body">
      <div
        v-show="visible"
        @click="visible = false"
        class="absolute z-[-10] top-0 left-0 bottom-0 right-0 bg-[#8c8c8c]"
      ></div>
    </Teleport>
    <button
      @click="visible = true"
      class="w-[100px] h-[45px] text-[#f1f1f1] rounded hover:bg-[#4096ff] transition-all bg-[#1677ff] text-[16px]"
    >
      Open
    </button>
    <Transition>
      <div
        v-show="visible"
        class="w-[300px] h-full fixed right-0 top-0 bg-white flex flex-col z-50"
      >
        <div
          class="w-full h-[70px] pl-[10px] flex items-center border-t border-b border-[#333]"
        >
          <Icon
            @click="visible = false"
            class="cursor-pointer mx-[10px]"
            icon="ix:error"
            width="24"
            height="24"
            style="color: #cccccc"
          />
          Basic Drawer
        </div>
        <div></div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
const visible = ref(false);
</script>
<style scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active {
  transition: all ease 300ms;
}
.v-leave-active {
  transition: all ease 300ms;
}
.v-enter-from,
.v-leave-to {
  right: -100%;
}
.v-enter-to,
.v-leave-from {
  right: 0;
}
</style>

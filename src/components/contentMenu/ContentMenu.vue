<template>
  <div
    ref="wrapperRef"
    :style="{
      top: `${props.position.y}px`,
      left: `${props.position.x}px`,
    }"
    class="w-[200px] bg-white h-[300px] absolute"
  >
    <div v-for="item in props.menu" :key="item.id">{{ item.name }}</div>
  </div>
</template>

<script>
const isValidPosition = (value) => {
  return (
    typeof value === 'object' &&
    typeof value.x === 'number' &&
    typeof value.y === 'number'
  );
};
</script>

<script setup>
import { defineProps, defineOptions, shallowRef, defineEmits } from 'vue';
import { useClickOutSide } from './useClickOutSide';

const wrapperRef = shallowRef(null);

// 自定义组件名称
defineOptions({ name: 'contentMenu' });

// 自定义属性
const props = defineProps({
  position: {
    required: true,
    // 自定义验证器
    validator(value) {
      return isValidPosition(value);
    },
  },
  menu: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['click-outside']);
useClickOutSide(wrapperRef, () => emit('click-outside'));
console.log('🚀 ~ contentMenu.vue:36 ~ props:', props.position);
</script>

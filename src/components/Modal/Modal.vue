<template>
  <div>
    <!-- 弹出Modal框的开关 -->
    <button
      @click="openSwitch"
      class="w-[100px] h-[36px] text-center leading-[36px] rounded-[10px] bg-[#1677ff] text-[#f1f1f1] text-[14px]"
    >
      Open Modal
    </button>

    <Teleport to="body">
      <!-- 遮罩层 -->
      <div
        @click.stop="closeSwitch"
        v-show="props.visible"
        class="bg-[#8c8c8c] absolute z-[-10] top-0 left-0 bottom-0 right-0"
      ></div>
    </Teleport>

    <!-- 弹出框 -->
    <Transition name="triggerModal">
      <div
        v-show="props.visible"
        class="fixed w-[400px] h-[160px] translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] bg-[#fff] rounded-md px-[12px] py-[6px] z-10"
      >
        <div class="h-[40px] flex justify-between items-center">
          <span>Basic Modal</span
          ><Icon
            :onclick.stop="closeSwitch"
            class="cursor-pointer"
            icon="cuida:x-outline"
            width="24"
            height="24"
            style="color: #cccccc"
          />
        </div>

        <!--弹框内容 -->
        <div class="w-full h-[70px] text-[14px] text-[#666]">
          Some content.. <br />
          Some content.. <br />
          Some content.. <br />
        </div>

        <!-- 确定/取消按钮 -->
        <div class="w-full flex gap-[12px] justify-end items-center h-[42px]">
          <div
            @click.stop="cancel"
            class="flex justify-center items-center text-[#5e5e5e] text-[14px] w-[76px] h-[32px] rounded-md cursor-pointer border border-[#d5d5d5]"
          >
            取消
          </div>
          <div
            @click.stop="confirm"
            class="flex justify-center items-center text-[14px] w-[76px] h-[32px] bg-[#1677ff] text-[#fff] rounded-md cursor-pointer"
          >
            确定
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import {
  defineProps,
  defineOptions,
  computed,
  defineEmits,
  defineModel,
} from 'vue';

// 自定义组件名
defineOptions({
  name: '我是Modal组件',
});
// 获取组件中的属性值
const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  triggerPoint: {
    type: Object,
    required: true,
  },
});
console.log('🚀 ~ Modal.vue:84 ~ props.triggerPoint:', props.triggerPoint);

// 自定义事件
const emit = defineEmits(['open-modal', 'close-modal', 'cancel', 'confirm']);

/**
 * 打开开关函数
 * 该函数通过触发 'open-modal' 事件来开启一个模态框或开关
 * 主要用于在用户界面中触发模态框的显示
 * 点击开关按钮会触发该自定义事件，这个自定义事件绑定在其
 * 父元素中，父元素通过修改 visible属性值来控制组件的显示和
 * 隐藏
 */
function openSwitch(e) {
  emit('open-modal', e);
}

function closeSwitch() {
  emit('close-modal');
}

function cancel() {
  emit('close-modal');
  emit('cancel');
}

function confirm() {
  emit('close-modal');
  emit('confirm');
}

const stylePosition = computed(() => {
  return {
    left: `${props.triggerPoint.x}px`,
    top: `${props.triggerPoint.y}px`,
  };
});
</script>

<style scoped>
/* translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] */
/* 下面我们会解释这些 class 是做什么的 */

.triggerModal-enter-from {
  opacity: 0;
  left: v-bind('stylePosition.left');
  top: v-bind('stylePosition.top');
  transform: translate3d(0, 0, 0) scale(0);
}
.triggerModal-enter-active {
  transition: all 300ms ease;
}

.triggerModal-enter-to {
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0) scale(1);
  opacity: 1;
}
</style>

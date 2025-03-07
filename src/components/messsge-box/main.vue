<template>
  <Transition>
    <div v-if="show" class="messagebox">
      <div class="messagebox-header">
        <div class="message-box-title">{{ props.title }}</div>
        <Icon
          @click="hide"
          icon="akar-icons:cross"
          width="24"
          height="24"
          style="color: #666"
        />
      </div>
      <div class="messagebox-content">{{ props.content }}</div>
      <div class="messagebox-btns">
        <Button @click="onConfirm" />
      </div>
    </div>
  </Transition>
</template>

<script setup>
import Button from '../button/index.vue';
import { Icon } from '@iconify/vue';
import { ref, onMounted, defineProps } from 'vue';
// 控制 弹出框显示状态(默认显示) 当在根组件中 调用 open 方法后
// 将弹出框挂载到容器内
const show = ref(false);

// 在组件挂载完成后执行。
onMounted(() => {
  show.value = true;
});

const hide = () => {
  show.value = false;
};

const props = defineProps({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  resolve: {
    type: Function,
  },
  reject: {
    type: Function,
  },
});
const onConfirm = () => {
  hide();
  props.resolve();
};
</script>

<style scoped lang="scss">
@mixin middle-center {
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.messagebox {
  @include middle-center;
  position: absolute;
  display: inline-block;
  max-width: 420px;
  width: 100%;
  padding: 12px;
  vertical-align: middle;
  background-color: #fff;
  border-radius: 4px;
  font-size: 18px;
  box-shadow: 2px 8px 20px rgba(0, 0, 0, 0.1);
  text-align: left;
  overflow: hidden;
  backface-visibility: hidden;
  box-sizing: border-box;
  overflow-wrap: break-word;
  &-header {
    padding-bottom: 12px;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
  }
  &-btns {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all ease 200ms;
}
.v-enter-from,
.v-leave-to {
  transform: translate3d(-50%, -100%, 0);
}
.v-leave-from,
.v-enter-to {
  transform: translate3d(-50%, -50%, 0);
}
</style>

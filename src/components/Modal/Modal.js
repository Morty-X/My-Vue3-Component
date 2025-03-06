import Main from './Modal.vue';
import { defineComponent, ref, h, reactive } from 'vue';
export function useModal(option) {
  const visible = ref(false);
  const triggerPoint = ref({
    x: 0,
    y: 0,
  });
  const modalApi = {
    open() {
      visible.value = true;
    },
    hide() {
      visible.value = false;
    },
  };
  function onOpenModal(e) {
    console.log('🚀 ~ Modal.js:18 ~ onOpenModal ~ e:', e);
    triggerPoint.x = e.x;
    triggerPoint.y = e.y;
    visible.value = true;
  }

  function onCancel() {
    console.log('点击了取消');
  }
  function onConfirm() {
    console.log('点击了确定');
  }
  const Modal = defineComponent({
    name: '我是Modal组件外面包裹的一层',
    setup() {
      return () => {
        return h(Main, {
          visible: visible.value,
          onOpenModal,
          onCancel,
          onConfirm,
          triggerPoint: triggerPoint.value,
          onCloseModal() {
            modalApi.hide();
          },
        });
      };
    },
  });
  return [Modal, modalApi];
}

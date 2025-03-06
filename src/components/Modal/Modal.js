import Main from './Modal.vue';
import { ref, defineComponent, h, reactive } from 'vue';
export function useModal(option) {
  const visible = ref(false);
  const mousePosition = reactive({
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
  const Modal = defineComponent({
    name: '我是Modal外层',
    setup() {
      return () =>
        h(Main, {
          visible: visible.value,
          content: option.content,
          onCancel: option.cancel,
          onConfirm: option.confirm,
          onClose() {
            modalApi.hide();
          },
        });
    },
  });

  return [Modal, modalApi];
}

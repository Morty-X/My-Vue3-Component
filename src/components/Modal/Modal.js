import Main from './Modal.vue';
import { ref, defineComponent, h } from 'vue';
export function useModal(option) {
  const visible = ref(false);
  const modalApi = {
    open() {
      visible.value = true;
    },
    hide() {
      visible.value = false;
    },
  };
  const Modal = defineComponent({
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

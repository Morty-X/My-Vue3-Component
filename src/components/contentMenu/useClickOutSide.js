import { onMounted } from 'vue';
export function useClickOutSide(domRef, callback) {
  onMounted(() => {
    document.addEventListener('click', ({ target }) => {
      if (!domRef.value?.contains(target)) {
        callback();
      }
    });
  });
}

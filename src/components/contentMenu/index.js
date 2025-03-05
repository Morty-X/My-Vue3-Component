// 在index.js文件中 引入 右键菜单组件 
import Main from './ContentMenu.vue';
import { ref, reactive, h, defineComponent } from 'vue';

export const useContentMenu = () => {
  const visible = ref(false);
  const position = reactive({ x: 0, y: 0 });
  const menu = ref([]);
  document.addEventListener('click', ({ x, y }) => {
    position.x = x;
    position.y = y;
  });
  // 屏蔽鼠标右键行为
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    visible.value = true;
    position.x = event.x;
    position.y = event.y;
    return false;
  });

  // 操作ContextMenu组件的方法集合;
  const api = {
    setMenuList(data) {
      menu.value = data;
    },
  };
  // h 函数：渲染函数；作用：渲染组件的
  // const ContentMenu = h(Main, {
  //   position: position,
  //   visible: visible.value,
  // });
  const onClickOutside = () => {
    visible.value = false;
  };

  // 渲染函数：就是用来渲染组件的
  const ContentMenu = defineComponent({
    setup() {
      return () =>
        visible.value
          ? h(Main, { position: position, onClickOutside, menu: menu.value })
          : null;
    },
  });
  return { ContentMenu, api };
};

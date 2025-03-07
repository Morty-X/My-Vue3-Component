import Main from './main.vue';
import { createApp } from 'vue';
const MessageBox = {
  open(option) {
    return new Promise((resolve, reject) => {
      const element = document.createElement('div');
      document.body.appendChild(element);
      // 第一个参数是根组件。第二个参数可选，它是要传递给根组件的 props。
      // app.mount() 将应用实例挂载在一个容器元素中。
      createApp(Main, { show: true, ...option, resolve, reject }).mount(
        element
      );
    });
  },
};
// export default命令用于指定模块的默认输出
export default MessageBox;

<!-- <template>
  <div @click="increase">{{ count }}</div>
</template> -->
<!--2、关于setup的问题 -->
<!-- 语法糖 -->
<!-- <script setup>
import { ref } from 'vue';
const count = ref(0);
const increase = () => count.value++;
</script> -->

<!-- 真正写法 -->
<script>
import { defineComponent, ref, h } from 'vue';
import foo from './foo.vue';
// 将自定义的组件默认导出
export default defineComponent({
  setup() {
    // 初始化一个响应式的数据 count，用于在组件中显示和操作
    const count = ref(0);

    // 定义 increase 函数，用于增加 count 的值
    const increase = () => count.value++;

    // 在 setup 函数中，我们返回了一个对象，该对象包含了 count 和 increase。这样，count 和 increase 就可以在组件的模板部分使用了。
    // return { count, increase };

    // 返回一个渲染函数，用于渲染组件的结构
    // 这里使用了 h 函数来创建一个虚拟节点（vnode），并将其渲染为一个 div 元素
    // div 元素具有一个 onClick 事件监听器，当用户点击 div 时，会调用 increase 函数来增加 count 的值
    // count.value 被嵌入到 div 中，以显示当前的计数值
    return () =>
      h('div', { onClick: increase }, [count.value], h(foo, { a: 123 }));
  },
});

// 如果 要提高组件逻辑 灵活性
// 必须使用 render函数的写法来渲染组件
// 但是 render函数必须有返回值

// h函数的第一个参数：标准标签的名称的字符串/组件对象
// h函数的第二个参数：包含标签或组件的属性、事件对象
// h函数的第三个参数：子节点(通过h函数创建的子节点的集合)
</script>

<!-- <template>
    <h1>我是BAZ页面</h1>
</template> -->

<!-- 通过纯JS的方法渲染模板 -->
<script>
// 让script肩负起 template 的功能
import { h } from 'vue';
export default {
  setup() {
    return () => h('div', {}, ['我是BAZ页面']);
  },
};
// 通过 JS写HTML结构  更加灵活
// 通过 template 写HTML 解构 更加方便
// 核心 vue-complier 作用：render()函数 (h)


</script>

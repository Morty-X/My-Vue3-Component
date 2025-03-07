<template>
  <Tab v-model:activeKey="activeKey">
    <TabItem key="1" tab="Tab 1">Content of Tab Pane 1</TabItem>
    <TabItem key="2" tab="Tab 2" force-render>Content of Tab Pane 2</TabItem>
    <TabItem key="3" tab="Tab 3">Content of Tab Pane 3</TabItem>
  </Tab>
</template>
<script setup>
import { defineComponent, ref } from 'vue';
import Tab from './components/Tab/Tab.vue';
import TabItem from './components/Tab/TabItem.vue';

const activeKey = ref('1');
</script>

<!-- <template>
  <div>
    <div class="tab-container">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="changeTab(index)"
        :class="{ selected: currentTab === index }"
        class="tab-item"
      >
        <span>{{ tab }}</span>
        <div v-if="currentTab === index" class="underline"></div>
      </div>
    </div>
    <div class="content-container">
      <div
        v-for="(content, index) in contents"
        :key="index"
        v-show="currentTab === index"
      >
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref(['Tab 1', 'Tab 2', 'Tab 3']);
const contents = ref(['Content 1', 'Content 2', 'Content 3']);
const currentTab = ref(0);

const changeTab = (index) => {
  currentTab.value = index;
};
</script>

<style scoped>
.tab-container {
  display: flex;
}

.tab-item {
  cursor: pointer;
  margin-right: 20px;
  position: relative;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 50%; /* 下划线宽度比文字宽度短 */
  height: 2px;
  background-color: blue;
  transform: translateX(-50%);
}

.selected {
  font-weight: bold;
}

.content-container {
  margin-top: 20px;
}
</style> -->

<template>
  <h1>a:{{ props.a }}</h1>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps(['a']);
</script>

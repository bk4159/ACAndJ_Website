<script setup>
import HeaderVue from './components/Header.vue';
</script>

<template>
  <div class="page">
    <HeaderVue class="header"></HeaderVue>
    <router-view class="content"></router-view>
  </div>
</template>

<style scoped>
  .page{
    display: flex;
    flex-flow: column;
    height: 100%;
  }
  .header {
    flex: 0 1 auto;
  }
  .content {
    flex: 1 1 auto;
  }
</style>

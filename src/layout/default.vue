<template>
  <el-container class="h-full" direction="vertical">
    <el-header class="shadow-md" height="48px">
      <Head />
    </el-header>

    <el-container mt-px direction="horizontal">
      <el-aside class="base-border-r overflow-y-hidden" width="200px">
        <el-scrollbar height="100%">
          <LeftMenu />
        </el-scrollbar>
      </el-aside>

      <el-main>
        <nav-tab />
        <div class="relative flex-1">
          <RouterView />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Head from './components/Head.vue'
import LeftMenu from './components/LeftMenu.vue'
import NavTab from './components/NavTab.vue'
</script>

<style lang="scss" scoped>
.el-container,
.el-aside {
  @apply relative overflow-hidden;
}

.el-main {
  --el-main-padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div class="text-container relative flex flex-col h-full">
    <cus-form :form-data="formData" />

    <div class="w-20 bg-amber aspect-video mt-2"></div>
  </div>
</template>

<script setup lang="ts">
const formData = reactive({})
</script>

<style lang="scss" scoped>
.text-container {
  color: var(--el-color-primary);
}
</style>

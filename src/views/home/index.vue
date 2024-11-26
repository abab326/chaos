<template>
  <div class="flex flex-col h-full w-full">
    <cus-form :form-data="formData" />
    <cus-table />
  </div>
</template>

<script setup lang="ts">
const formData = reactive({})
</script>

<style lang="scss" scoped></style>

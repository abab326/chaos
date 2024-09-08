<template>
  <div
    v-if="isOnlineSvg"
    :style="{
      '--svg-icon-url': `url(${icon})`,
      '--svg-icon-size': `${size}px`,
      '--svg-icon-color': color,
    }"
    class="svg-icon svg-icon-online"
    :class="className"
  />
  <svg
    v-else
    :style="{
      '--svg-icon-size': `${size}px`,
      '--svg-icon-color': color,
    }"
    class="svg-icon"
    :class="className"
    aria-hidden="true"
  >
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  // SVG 图标名称或在线URL
  icon: { type: String, required: true },
  // SVG 图标大小
  size: { type: [Number, String], default: 24 },
  // SVG 图标颜色
  color: { type: String, default: 'red' },
  // 图标类名
  className: { type: String, default: '' },
})
const isOnlineSvg = computed(() => /^(https?:)/.test(props.icon))
</script>
<style scoped lang="scss">
.svg-icon {
  width: var(--svg-icon-size);
  height: var(--svg-icon-size);
  fill: currentColor;
  color: var(--svg-icon-color);
  overflow: hidden;
}
.svg-icon-online {
  background-image: var(--svg-icon-url);
  background-size: cover;
  display: inline-block;
}
</style>

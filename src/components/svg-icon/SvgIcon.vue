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

export interface SvgIconProps {
  icon: string
  size?: number | string
  color?: string
  className?: string
}

const props = withDefaults(defineProps<SvgIconProps>(), {
  size: 16,
  color: 'currentColor',
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

<template>
  <el-sub-menu v-if="haveChildren" :index="menuItem.id + ''" :key="menuItem.id">
    <template #title>
      <div class="line-clamp-2 leading-5 text-wrap">
        {{ menuItem.name }}
      </div>
    </template>
    <left-menu-item
      v-for="item in menuItem.children"
      :key="item.id"
      :menu-item="item"
    />
  </el-sub-menu>
  <el-menu-item v-else :index="menuItem.id + ''">
    <div class="line-clamp-2 leading-5 text-wrap">
      {{ menuItem.name }}
    </div>
  </el-menu-item>
</template>

<script setup lang="ts">
import { Menu } from '@/types/menu'

interface Props {
  menuItem: Menu
}

const props = defineProps<Props>()

const haveChildren = computed(() => props.menuItem.children)
</script>

<style scoped></style>

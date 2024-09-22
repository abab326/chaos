<template>
  <div
    ref="cusTableRef"
    class="relative flex-1 flex flex-col overflow-hidden p-t-2"
  >
    <div class="flex-1">
      <el-table :data="data" :height="tableHeight" border>
        <el-table-column label="id" prop="id" width="100" index="" />

        <el-table-column label="操作" min-width="100" fixed="right">
        </el-table-column>
      </el-table>
    </div>
    <div class="flex justify-end p-t-2 overflow-hidden">
      <el-pagination
        background
        layout="total,->,jumper, prev, pager, next,   "
        :total="1000"
        :page-sizes="[100, 200, 300, 400]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
const cusTableRef = ref<HTMLElement | null>(null)
const data = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])

const { height } = useElementSize(cusTableRef)

const tableHeight = computed(() => {
  return height.value - 40
})
</script>

<style lang="scss" scoped>
:deep(.cell) {
  min-height: 1.5rem;
}
</style>

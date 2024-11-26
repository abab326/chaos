<template>
  <div ref="cusTableRef" class="relative flex-1 h-full m-2">
    <div class="absolute top-0 left-0 right-0">
      <el-table :data="data" :height="tableHeight" border>
        <el-table-column label="序号" type="index" width="60" align="center" />
        <el-table-column label="姓名" prop="name" width="100" />
        <el-table-column label="年龄" prop="age" width="100" />
        <el-table-column label="性别" prop="sex" width="100" />
        <el-table-column label="地址" prop="address" min-width="120" />
        <el-table-column label="电话" prop="phone" width="100" />
        <el-table-column label="邮箱" prop="email" width="100" />
        <el-table-column label="操作" fixed="right" width="100">
          <template #default>
            <div class="flex items-center justify-center">
              <el-button type="primary" link disabled>编辑</el-button>
              <el-button type="danger" link>删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-pagination
      class="p-t-2 absolute bottom-0 right-0"
      v-model:page-size="pageSize"
      v-model:current-page="currentPage"
      :total="total"
      :layout="layout"
      :page-sizes="pageSizeList"
      @current-change="changePage"
      @size-change="changePageSize"
    />
  </div>
</template>

<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import usePagination from '@/hooks/use-pagination'

const cusTableRef = ref<HTMLElement | null>(null)
const { height } = useElementSize(cusTableRef)
const {
  currentPage,
  pageSize,
  total,
  layout,
  pageSizeList,
  changePage,
  changePageSize,
  changeTotal,
} = usePagination()
const data = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])

const tableHeight = computed(() => {
  return height.value - 40
})

onMounted(() => {
  getTableData()
})
const getTableData = () => {
  changeTotal(100)
}
</script>

<style lang="scss" scoped>
:deep(.el-table) {
  .el-table__cell {
    padding: 4px 0;
  }
}
:deep(.cell) {
  min-height: 1.5rem;
}
</style>

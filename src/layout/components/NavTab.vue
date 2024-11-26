<template>
  <div class="nav-container">
    <el-tabs v-model="active" type="border-card" tab-position="top" stretch>
      <el-tab-pane
        v-for="item in panes"
        :key="item.key"
        :label="item.label"
        :name="item.key"
        closable
        @tab-change="onTabChange"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { TabPaneName } from 'element-plus'

const active = ref('1')
const panes = reactive([
  {
    key: '1',
    label: 'TabTab 1',
  },
  {
    key: '2',
    label: 'TabTabTab 2',
  },
  {
    key: '3',
    label: 'TabTabTabTab 3',
  },
  {
    key: '4',
    label: 'TabTabTabTab 4',
  },
  {
    key: '5',
    label: 'TabTabTabTabTabTabTabTab 5',
  },
  {
    key: '6',
    label: 'TabTabTabTabTabTabTab 6',
  },
  {
    key: '7',
    label: 'TabTabTabTabTabTab 7',
  },
  {
    key: '8',
    label: 'TabTabTabTabTab 8',
  },
  {
    key: '9',
    label: 'TabTabTabTab 9',
  },
])
/**
 * 当Tab标签切换时更新活动Tab的名称
 *
 * @param name 当前选中的Tab标签名称，类型为TabPaneName
 */
const onTabChange = (name: TabPaneName) => {
  // 更新活动Tab的名称，这里假设active是一个响应式对象，其值会被Vue追踪并自动更新到视图中
  active.value = name as string
}
</script>

<style lang="scss" scoped>
.nav-container {
  :deep(.el-tabs--border-card) {
    border: none;
    .el-tabs__header {
      --el-tabs-header-height: 36px;
      --el-fill-color-light: #fafafa;
      .el-tabs__nav-next,
      .el-tabs__nav-prev {
        line-height: var(--el-tabs-header-height);
      }
    }
    .el-tabs__content {
      padding: 0;
    }
    .el-tabs__item {
      border-radius: 4px;
    }
  }
}
</style>

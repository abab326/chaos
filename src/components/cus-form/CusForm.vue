<template>
  <el-form class="cus-form" ref="formRef" :model="formData" label-width="80px">
    <div grid gap-2 class="grid-cols-24">
      <div
        v-for="(item, index) in colProps"
        :key="index"
        :class="gridItemSpan(item.span)"
      >
        <el-form-item :label="item.label" :prop="item.prop">
          <CusFormItem :formItemOption="item" />
        </el-form-item>
      </div>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import CusFormItem from './CusFormItem.vue'
import { CusFormProps } from './type'
const formRef = ref<FormInstance>()

const props = withDefaults(defineProps<CusFormProps>(), {
  colSpan: 6,
  formData: {},

  colProps: () => [
    {
      label: '姓名',
      prop: 'name',
      type: 'input',
      componentProps: {
        placeholder: '请输入',
        clearable: true,
      },
    },
    {
      label: '是否',
      prop: 'checked',
      type: 'radio-group',
      componentSlots: {
        default: [
          { type: 'radio', label: '选项1', value: 1 },
          { type: 'radio', label: '选项2', value: 2 },
        ],
      },
    },
    {
      label: '是否',
      prop: 'checked',
      type: 'checkbox-group',

      componentSlots: {
        default: [
          {
            type: 'checkbox',
            label: '选项1',
            value: 1,
          },
          {
            type: 'checkbox',
            label: '选项2',
            value: 2,
          },
          {
            type: 'checkbox',
            label: '选项2',
            value: 3,
          },
          {
            type: 'checkbox',
            label: '选项2',
            value: 4,
          },
        ],
      },
    },
    {
      label: '下拉选择',
      prop: 'select',
      type: 'select',
      span: 6,
      componentProps: {
        placeholder: '请选择',
        clearable: true,
        multiple: true,
        filterable: true,
      },
      componentSlots: {
        default: [
          { type: 'option', label: '选项1', value: 1 },
          { type: 'option', label: '选项2', value: 2 },
          { type: 'option', label: '选项2', value: 3 },
          { type: 'option', label: '选项2', value: 4 },
          { type: 'option', label: '选项2', value: 5 },
        ],
      },
    },
    {
      label: '日期',
      prop: 'date',
      type: 'date-picker',
      componentProps: {
        'placeholder': '请选择',
        'type': 'month',
        'clearable': true,
        'value-format': 'yyyy-MM',
      },
    },
  ],
})

const gridItemSpan = computed(() => {
  const spanMap: Record<number, string> = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    6: 'col-span-6',
    8: 'col-span-8',
    12: 'col-span-12',
    24: 'col-span-24',
  }

  return (itemSpan?: number) => spanMap[itemSpan ?? props.colSpan]
})
</script>

<style lang="scss" scoped>
.cus-form {
  padding: 0.75rem 1rem 0;
  :deep(.el-form-item) {
    margin-bottom: 0.75rem;
  }
}
</style>

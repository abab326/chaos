<template>
  <el-form
    class="cus-form"
    ref="formRef"
    :model="formData"
    label-width="80px"
    @validate="handleValidate"
  >
    <div grid gap-2 :class="gridCols">
      <div v-for="(item, index) in colProps" :key="index" class="col-span-3">
        <el-form-item :label="item.label" :prop="item.prop">
          <CusFormItem :formItemOption="item" />
        </el-form-item>
      </div>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import type { FormInstance, FormItemProp } from 'element-plus'
import CusFormItem from './CusFormItem.vue'
import { CusFormProps } from './type'
const formRef = ref<FormInstance>()

const props = withDefaults(defineProps<CusFormProps>(), {
  cols: 12,
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
  ],
})

const gridCols = computed(() => {
  const colsMap: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12',
    24: 'grid-cols-24',
  }

  return colsMap[props.cols]
})
const handleValidate = (prop: FormItemProp) => {
  console.log('222', prop, props.formData)
}
</script>

<style lang="scss" scoped>
.cus-form {
  padding: 0.75rem 1rem 0;
  :deep(.el-form-item) {
    margin-bottom: 0.75rem;
  }
}
</style>

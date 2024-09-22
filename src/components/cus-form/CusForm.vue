<template>
  <el-form
    class="cus-form"
    ref="formRef"
    :model="formData"
    :rules="rules"
    label-width="80px"
    @validate="handleValidate"
  >
    <div grid gap-2 :class="gridCols">
      <div v-for="(item, index) in colProps" :key="index" class="col-span-3">
        <el-form-item v-if="index !== 1" :label="item.label" :prop="item.prop">
          <el-input
            v-if="item.type === 'text'"
            v-model="formData[item.prop]"
            placeholder="请输入姓名"
            clearable
          />
        </el-form-item>
        <el-form-item
          v-if="item.type === 'checkbox'"
          :label="item.label"
          :prop="item.prop"
        >
          <el-checkbox-group v-model="formData[item.prop]">
            <el-checkbox :value="1" />
            <el-checkbox :value="2" />
          </el-checkbox-group>
        </el-form-item>
      </div>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import type { FormInstance, FormItemProp, FormRules } from 'element-plus'
import { CusFormProps } from './type'
const formRef = ref<FormInstance>()

const props = withDefaults(defineProps<CusFormProps>(), {
  cols: 12,
  formData: {},
  colProps: () => [
    { label: '姓名', prop: 'name', type: 'text' },
    { label: '是否', prop: 'checked', type: 'checkbox' },
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
  }

  return colsMap[props.cols]
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  checked: [
    {
      required: true,
      message: 'Please select',
      trigger: 'change',
    },
  ],
})

const handleValidate = (prop: FormItemProp) => {
  console.log('222', prop, props.formData)
}
</script>

<style lang="scss" scoped>
.cus-form {
  :deep(.el-form-item) {
    margin-bottom: 1rem;
  }
  .el-checkbox {
    margin-right: 0.75rem;
  }
}
</style>

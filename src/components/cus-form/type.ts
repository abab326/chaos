export type FormItemComponentType =
  | 'input'
  | 'select'
  | 'checkbox'
  | 'checkbox-group'
  | 'radio-group'
  | 'radio'
  | 'switch'
  | 'date-picker'
  | 'time-picker'
  | 'cascader'
  | 'upload'

export interface CusFormItemProps {
  prop: string
  label: string
  span?: 1 | 2 | 3 | 4 | 6 | 8 | 12 | 24
  type: FormItemComponentType
  rules?: any
  componentProps?: Record<string, any>
  componentAttrs?: Record<string, any>
  componentEvents?: Record<string, any>
  componentSlots?: Record<string, any>
}

export interface CusFormProps {
  // 列数
  colSpan?: number
  // 列属性
  colProps?: CusFormItemProps[]
  // 表单数据
  formData?: any
}

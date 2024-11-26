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
  type: FormItemComponentType
  rules?: any
  componentProps?: Record<string, any>
  componentAttrs?: Record<string, any>
  componentEvents?: Record<string, any>
  componentSlots?: Record<string, any>
}

export interface CusFormProps {
  // 列数
  cols?: number
  // 列属性
  colProps?: CusFormItemProps[]
  // 表单数据
  formData?: any
}

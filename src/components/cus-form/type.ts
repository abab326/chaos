export interface CusFormItemProps {
  prop: string
  label: string
  type: 'text' | 'select' | 'textarea' | 'checkbox'
}

export interface CusFormProps {
  // 列数
  cols?: number
  // 列属性
  colProps?: CusFormItemProps[]
  // 表单数据
  formData?: any
}

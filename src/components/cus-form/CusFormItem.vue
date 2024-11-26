<script lang="ts">
import { CusFormItemProps } from './type'
export default {
  name: 'CusFormItem',
  props: {
    formItemOption: {
      type: Object as PropType<CusFormItemProps>,
      required: true,
    },
  },

  setup(props) {
    const inputValue = ref()

    const buildModelValue = () => {
      return {
        'modelValue': inputValue.value,
        'onUpdate:modelValue': (val: string) => {
          console.log('update', val)
          inputValue.value = val
        },
      }
    }

    const buildProp = () => {
      const { componentProps, componentAttrs } = props.formItemOption
      return {
        ...componentProps,
        ...componentAttrs,
      }
    }
    const buildEvent = () => {
      const { componentEvents } = props.formItemOption
      // TODO 事件处理
      return componentEvents
    }
    const buildChild = () => {
      const { componentSlots } = props.formItemOption
      const childList: Record<string, any> = {}
      if (componentSlots) {
        for (let key in componentSlots) {
          const slotInfo = componentSlots[key]
          if (Array.isArray(slotInfo)) {
            childList[key] = () =>
              slotInfo.map((element) =>
                h(resolveComponent(`el-${element.type}`), { ...element })
              )
          } else {
            childList[key] = () =>
              h(resolveComponent(`el-${slotInfo.type}`), { ...slotInfo })
          }
        }
      }
      return childList
    }
    return () => [
      h(
        resolveComponent(`el-${props.formItemOption.type}`),
        {
          ...buildModelValue(),
          ...buildProp(),
          ...buildEvent(),
        },
        buildChild()
      ),
    ]
  },
}
</script>

<style lang="scss" scoped>
:deep(.el-checkbox) {
  margin-right: 0.75rem;
}
:deep(.el-radio) {
  margin-right: 0.75rem;
}
</style>

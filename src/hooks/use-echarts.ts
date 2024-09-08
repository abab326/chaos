import * as ECharts from 'echarts'

const useECharts = (
  chartRef: Ref<HTMLElement | undefined>,
  options: Ref<Record<string, any>>,
) => {
  const chartInstance = ref<ECharts.ECharts>()

  onMounted(() => {
    chartInstance.value = markRaw(ECharts.init(chartRef.value))
    // 设置 ECharts 配置项
    chartInstance.value.setOption(options.value)
    // 监听窗口大小变化，自动调整图表大小
    window.addEventListener('resize', onResize)
  })

  const onResize = () => {
    chartInstance.value?.resize()
  }

  onUnmounted(() => {
    // 销毁 ECharts 实例
    chartInstance.value?.dispose()
    // 移除窗口大小变化监听器
    window.removeEventListener('resize', onResize)
  })
  return { chartInstance }
}
export default useECharts

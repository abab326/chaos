<template>
  <div class="bg-blue-200 w-full overflow-x-hidden">
    <el-row :gutter="20">
      <el-col :span="12">
        <div ref="barChart" class="h-80"></div>
      </el-col>
      <el-col :span="12">
        <div ref="barChart2" class="h-80"></div>
      </el-col>
    </el-row>

    <SvgIcon icon="aa" size="48" />
    <SvgIcon
      icon="https://img1.baidu.com/it/u=3998842319,3869674004&fm=253&fmt=auto&app=138&f=GIF?w=209&h=152"
    />
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/svg-icon/SvgIcon.vue'
import useECharts from '@/hooks/use-echarts'
import { ECBasicOption } from 'echarts/types/src/util/types.js'

const barChart = ref<HTMLElement>()
const barChart2 = ref<HTMLElement>()
const option = ref<ECBasicOption>({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
    },
  ],
})
const option2 = ref<ECBasicOption>({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [
        120,
        {
          value: 200,
          itemStyle: {
            color: '#a90000',
          },
        },
        150,
        80,
        70,
        110,
        130,
      ],
      type: 'bar',
    },
  ],
})
useECharts(barChart, option)
useECharts(barChart2, option2)
</script>

<style scoped></style>

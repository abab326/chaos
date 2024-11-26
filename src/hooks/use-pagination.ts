export default function usePagination(
  initPage: number = 1,
  initSize: number = 10
) {
  const currentPage = ref(initPage)
  const pageSize = ref(initSize)
  const total = ref(0)
  const layout = ref('total,->, sizes, prev, pager, next, jumper')
  const pageSizeList = ref([10, 20, 30])
  const changePage = (page: number) => {
    console.log('changePage 111', page)
  }
  const changePageSize = (size: number) => {
    pageSize.value = size
  }
  const changeTotal = (totalValue: number) => {
    total.value = totalValue
  }

  return {
    currentPage,
    pageSize,
    total,
    layout,
    pageSizeList,
    changePage,
    changePageSize,
    changeTotal,
  }
}

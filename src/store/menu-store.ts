import { Menu } from '@/types/menu'

export const useMenuStore = defineStore('menuStore', () => {
  const menuList = ref<Menu[]>([])

  return {
    menuList,
  }
})

interface MenuItem {
  id: number
  name: string
  children?: MenuItem[]
  code?: string
  path?: string
  status?: boolean
  [property: string]: any
}

export type Menu = MenuItem

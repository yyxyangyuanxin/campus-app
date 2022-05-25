// 快捷应用列表项
export interface QuickAppItem {
  title: string
  iconUrl: string
  type: QuickAppType
}

// 快捷应用类型
export type QuickAppType = 'course'
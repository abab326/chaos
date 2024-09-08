import {
  ElMessageBoxOptions,
  ElNotification,
  MessageOptions,
} from 'element-plus'

import { merge } from 'lodash-es'
type optionType = MessageOptions | Partial<NotificationOptions> | string

interface MessageImplements {
  info(option?: optionType): void
  warning(option?: optionType): void
  success(option?: optionType): void
  error(option?: optionType): void
}

interface MessageBoxImplements {
  info(message: string, option?: ElMessageBoxOptions, title?: string): void
  warning(message: string, option?: ElMessageBoxOptions, title?: string): void
  success(message: string, option?: ElMessageBoxOptions, title?: string): void
  error(message: string, option?: ElMessageBoxOptions, title?: string): void
}

// message
export function useMessage() {
  class Message implements MessageImplements {
    // 普通提示
    info(option: optionType): void {
      ElMessage.info(option)
    }
    // 警告提示
    warning(option: optionType): void {
      ElMessage.warning(option)
    }
    // 成功提示
    success(option: optionType): void {
      ElMessage.success(option)
    }
    // 错误提示
    error(option: optionType): void {
      ElMessage.error(option)
    }
  }
  return new Message()
}
// messageBox
export function useMessageBox() {
  class MessageBox implements MessageBoxImplements {
    // 普通提示
    info(
      message: string,
      option?: ElMessageBoxOptions,
      title: string = '温馨提示'
    ): void {
      ElMessageBox.alert(message, title, option)
    }
    // 警告提示
    warning(
      message: string,
      option?: ElMessageBoxOptions,
      title: string = '温馨提示'
    ): void {
      option = { ...option, ...{ type: 'warning' } }
      ElMessageBox.alert(message, title, option)
    }
    // 成功提示
    success(
      message: string,
      option?: ElMessageBoxOptions,
      title: string = '温馨提示'
    ): void {
      option = { ...option, ...{ type: 'warning' } }
      ElMessageBox.alert(message, title, option)
    }
    // 错误提示
    error(
      message: string,
      option?: ElMessageBoxOptions,
      title: string = '温馨提示'
    ): void {
      option = { ...option, ...{ type: 'warning' } }
      ElMessageBox.alert(message, title, option)
    }
    // 确认窗体
    confirm(
      message: string,
      option?: ElMessageBoxOptions,
      title: string = '温馨提示'
    ) {
      return ElMessageBox.confirm(message, title, option)
    }
    // 提交内容
    prompt(
      message: string,
      option?: ElMessageBoxOptions,
      title: string = '温馨提示'
    ) {
      return ElMessageBox.prompt(message, title, option)
    }
  }
  return new MessageBox()
}
export function useNotify() {
  class Notify implements MessageImplements {
    info(
      message: string,
      title: string = '温馨提示',
      option?: Partial<NotificationOptions>
    ): void {
      const newOption = merge(option, { message, title })
      ElNotification.info(newOption)
    }
    warning(
      message: string,
      title: string = '温馨提示',
      option?: Partial<NotificationOptions>
    ): void {
      const newOption = merge(option, { message, title })
      ElNotification.warning(newOption)
    }

    success(
      message: string,
      title: string = '温馨提示',
      option?: Partial<NotificationOptions>
    ): void {
      const newOption = merge(option, { message, title })
      ElNotification.success(newOption)
    }

    error(
      message: string,
      title: string = '温馨提示',
      option?: Partial<NotificationOptions>
    ): void {
      const newOption = merge(option, { message, title })
      ElNotification.error(newOption)
    }
  }
  return new Notify()
}

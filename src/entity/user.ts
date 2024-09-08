/**
 * UserVo，用户信息
 */
export interface UserInfo {
  /**
   * 头像
   */
  avatar?: string
  /**
   * 创建时间
   */
  createTime?: Date
  /**
   * 创建人ID
   */
  createUserId?: number
  /**
   * 创建人名称
   */
  createUserName?: string
  /**
   * 邮箱
   */
  email?: string
  /**
   * 用户ID
   */
  id?: number
  /**
   * 用户名
   */
  name?: string
  /**
   * 更新时间
   */
  updateTime?: Date
  /**
   * 更新人ID
   */
  updateUserId?: number
  /**
   * 更新人名称
   */
  updateUserName?: string
  [property: string]: any
}
/**
 * RegisterVo，用户注册实体
 */
export interface RegisterVo {
  /**
   * 验证码
   */
  code: string
  /**
   * 密码
   */
  password: string
  /**
   * 用户名
   */
  username: string
}

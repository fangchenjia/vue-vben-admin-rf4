/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  mobile: string;
  password: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  refreshToken: string;
  accessToken: string;
  role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[];
  // 用户id
  _id: string;
  // 用户名
  nickname: string;
  // 真实名字
  mobile: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
}

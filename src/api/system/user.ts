import { UserItem } from './model/userModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  User = '/v1/system/user',
}

export const getUserList = (param) => defHttp.get({ url: Api.User, params: param });

export const createUser = (data: UserItem) => defHttp.post({ url: Api.User, data });

export const updateUser = (data: UserItem) => defHttp.put({ url: `${Api.User}/${data._id}`, data });

export const deleteUser = (id: string) => defHttp.delete({ url: `${Api.User}/${id}` });

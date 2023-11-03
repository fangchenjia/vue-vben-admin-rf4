import { RoleItem } from './model/roleModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  Role = '/v1/system/role',
}

export const getRoleList = () => defHttp.get({ url: Api.Role });

export const createRole = (data: RoleItem) => defHttp.post({ url: Api.Role, data });

export const updateRole = (data: RoleItem) => defHttp.put({ url: `${Api.Role}/${data._id}`, data });

export const deleteRole = (id: string) => defHttp.delete({ url: `${Api.Role}/${id}` });

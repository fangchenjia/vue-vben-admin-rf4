import { MenuListItem } from './model/menuModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  MenuTree = '/v1/system/menu/treeMenu',
  MenuList = '/v1/system/menu',
}

export const getMenuTree = () => defHttp.get({ url: Api.MenuTree });

export const getMenuList = () => defHttp.get({ url: Api.MenuList });

export const createMenu = (data: MenuListItem) => defHttp.post({ url: Api.MenuList, data });

export const updateMenu = (data: MenuListItem) =>
  defHttp.put({ url: `${Api.MenuList}/${data._id}`, data });

export const deleteMenu = (id: string) => defHttp.delete({ url: `${Api.MenuList}/${id}` });

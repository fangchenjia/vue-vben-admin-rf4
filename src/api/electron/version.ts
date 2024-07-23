import { defHttp } from '/@/utils/http/axios';

enum Api {
  Version = '/v1/electron/version',
}

export const getVersionList = (param) => defHttp.get({ url: Api.Version, params: param });

export const createVersion = (data) => defHttp.post({ url: Api.Version, data });

export const deleteVersion = (id) => defHttp.delete({ url: `${Api.Version}/${id}` });

export const updateVersion = (data) => defHttp.put({ url: `${Api.Version}/${data.id}`, data });

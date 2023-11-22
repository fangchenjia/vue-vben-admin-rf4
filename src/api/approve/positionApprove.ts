import { defHttp } from '/@/utils/http/axios';

enum Api {
  Position = '/v1/approve/position',
}

export const getPositionList = (param) => defHttp.get({ url: Api.Position, params: param });

export const approvePosition = (data) => defHttp.post({ url: Api.Position, data });

export const deletePosition = (id) => defHttp.delete({ url: `${Api.Position}/${id}` });

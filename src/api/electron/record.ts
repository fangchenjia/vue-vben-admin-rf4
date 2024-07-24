import { defHttp } from '/@/utils/http/axios';

enum Api {
  Record = '/v1/electron/record',
}

export const getRecordList = (param) => defHttp.get({ url: Api.Record, params: param });

export const createRecord = (data) => defHttp.post({ url: Api.Record, data });

export const deleteRecord = (id) => defHttp.delete({ url: `${Api.Record}/${id}` });

export const updateRecord = (data) => defHttp.put({ url: `${Api.Record}/${data.id}`, data });

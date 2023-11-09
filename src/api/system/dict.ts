import { DictItem } from './model/dictModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  Dict = '/v1/system/dict',
}

export const getDictList = (param) => defHttp.get({ url: Api.Dict, params: param });

export const createDict = (data: DictItem) => defHttp.post({ url: Api.Dict, data });

export const updateDict = (data: DictItem) => defHttp.put({ url: `${Api.Dict}/${data._id}`, data });

export const deleteDict = (id: string) => defHttp.delete({ url: `${Api.Dict}/${id}` });

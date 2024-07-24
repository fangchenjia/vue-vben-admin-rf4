import { BasicColumn, FormSchema } from '/@/components/Table';
import { formatToDateTime } from '/@/utils/dateUtil';

export const columns: BasicColumn[] = [
  {
    title: 'id',
    dataIndex: 'electronId',
    width: 120,
  },
  {
    title: '名称',
    dataIndex: 'title',
    width: 120,
  },
  {
    title: '作者',
    dataIndex: 'author',
    width: 240,
    customRender: ({ record }) => {
      return `${record.author?.nickname}(${record.author?.roles
        ?.map((role) => role.name)
        .join(',')})`;
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 240,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '名称',
    field: 'title',
    component: 'Input',
    colProps: { span: 6 },
  },
];

import { BasicColumn, FormSchema } from '/@/components/Table';
import { formatToDateTime } from '/@/utils/dateUtil';

export const columns: BasicColumn[] = [
  {
    title: '字典项类型',
    dataIndex: 'type',
    width: 120,
  },
  {
    title: '字典项名称',
    dataIndex: 'dictName',
    width: 120,
  },
  {
    title: '字典项值',
    dataIndex: 'dictValue',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    width: 180,
    customRender: ({ record }) => {
      return formatToDateTime(record.updatedAt);
    },
  },
  {
    title: '字典项描述',
    dataIndex: 'description',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '字典项类型',
    field: 'type',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    label: '字典项名称',
    field: 'dictName',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    label: '字典项值',
    field: 'dictValue',
    component: 'Input',
    colProps: { span: 6 },
  },
];

export const dictFormSchema: FormSchema[] = [
  {
    field: 'type',
    component: 'Input',
    label: '字典项类型',
    required: true,
  },
  {
    field: 'dictName',
    component: 'Input',
    label: '字典项名称',
    required: true,
  },
  {
    field: 'dictValue',
    component: 'Input',
    label: '字典项值',
    required: true,
  },
  {
    field: 'description',
    component: 'InputTextArea',
    label: '字典项描述',
  },
];

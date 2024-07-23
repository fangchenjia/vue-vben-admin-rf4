import { BasicColumn, FormSchema } from '/@/components/Table';
import { formatToDateTime } from '/@/utils/dateUtil';

export const columns: BasicColumn[] = [
  {
    title: '版本号',
    dataIndex: 'version',
    width: 120,
  },
  {
    title: '描述',
    dataIndex: 'description',
    width: 120,
  },
  {
    title: '强制更新',
    dataIndex: 'disabled',
    width: 120,
    customRender: ({ record }) => {
      return record.disabled ? '是' : '否';
    },
  },
  {
    title: '提醒更新',
    dataIndex: 'updateNotice',
    width: 120,
    customRender: ({ record }) => {
      return record.updateNotice ? '是' : '否';
    },
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
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '版本号',
    field: 'version',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    label: '描述',
    field: 'description',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    label: '强制更新',
    field: 'disabled',
    component: 'Select',
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    colProps: { span: 6 },
  },
  {
    label: '提醒更新',
    field: 'updateNotice',
    component: 'Select',
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    colProps: { span: 6 },
  },
];

export const versionFormSchema: FormSchema[] = [
  {
    field: 'version',
    component: 'Input',
    label: '版本号',
    required: true,
  },
  {
    field: 'description',
    component: 'Input',
    label: '描述',
    required: true,
  },
  {
    field: 'disabled',
    component: 'Switch',
    label: '强制更新',
  },
  {
    field: 'updateNotice',
    component: 'Switch',
    label: '提醒更新',
  },
];
